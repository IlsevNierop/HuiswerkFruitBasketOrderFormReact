import React, {useState} from 'react';
import Button from "./Button";

function Article({fruitName, fruitCounter, setFruitCounter}) {

    return (
        <>
            <article>
            <h2>{fruitName}</h2>
                <button
                    type="button"
                    onClick={() => setFruitCounter(fruitCounter -1)}
                    disabled={fruitCounter===0}
                >-</button>
            {fruitCounter}
                <button
                    type="button"
                    onClick={() => setFruitCounter(fruitCounter +1)}
                >+</button>
            </article>
            </>

    );
}

export default Article;