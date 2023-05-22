import React from 'react';

function FruitCounterArticle({fruitName, fruitCounter, setFruitCounter}) {


    return (
        <>
            <article className = {fruitCounter > 0 ? "article-active" : ""}>
            <h2>{fruitName}</h2>
                <div>
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
                </div>
            </article>
            </>

    );
}

export default FruitCounterArticle;