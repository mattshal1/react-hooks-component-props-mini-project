import React from "react";
import blogData from "../data/blog";

function Artical(){
    const bento = '🍱', coffee = '☕️';

    const post = blogData.posts.map( item => {
        const repeatEmoji = (str,minute) => str.repeat(Math.ceil(item.minutes / minute));
        return ( 
        <article key={item.id}>
            <h3>{item.title}</h3>

            { 
                (item.date === undefined || item.date === '') ?
                <small>January 1, 1970 . {item.minutes > 30 ? repeatEmoji(bento,10) : repeatEmoji(coffee,5)} {item.minutes} min read</small>:
                <small>{item.date} . {item.minutes > 30 ? repeatEmoji(bento,10) : repeatEmoji(coffee,5)} {item.minutes} min read</small>
            }
            <p>{item.preview}</p>
        </article>
        )
    })
    return (
        <>
            {post}
        </>
    );
}

export default Artical;