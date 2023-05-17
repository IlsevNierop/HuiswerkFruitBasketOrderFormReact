import React, {useState} from 'react';
import Button from "./Button";

function Article({fruitName, fruitCounter, clickHandlerDecrement, clickHandlerIncrement}) {

    return (
        <>
            <article>
            <h2>{fruitName}</h2>
                <button
                    type="button"
                    onClick={clickHandlerDecrement}
                    disabled={fruitCounter===0}
                >-</button>
            {fruitCounter}
                <button
                    type="button"
                    onClick={clickHandlerIncrement}
                >+</button>
            </article>
            </>

    );
}

export default Article;