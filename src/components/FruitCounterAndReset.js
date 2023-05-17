import React, {useState} from 'react';
import Article from "./Article";
import Button from "./Button";

function FruitCounterAndReset() {
    const [bananaCounter, setBananaCounter] = useState(0);
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    function resetAllFruit(){
        setBananaCounter(0);
        setStrawberryCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    return (
        <>
            <Article fruitName="🍌 Bananen"
                     fruitCounter={bananaCounter}
                     clickHandlerIncrement={() => setBananaCounter(bananaCounter + 1)}
                     clickHandlerDecrement={() => setBananaCounter(bananaCounter - 1)}
            ></Article>
            <Article fruitName="🍓 Aardbeien"
                     fruitCounter={strawberryCounter}
                     clickHandlerIncrement={() => setStrawberryCounter(strawberryCounter + 1)}
                     clickHandlerDecrement={() => setStrawberryCounter(strawberryCounter - 1)}
            ></Article>
            <Article fruitName="🍏 Appels"
                     fruitCounter={appleCounter}
                     clickHandlerIncrement={() => setAppleCounter(appleCounter + 1)}
                     clickHandlerDecrement={() => setAppleCounter(appleCounter - 1)}
            ></Article>
            <Article fruitName="🥝 Kiwi's"
                     fruitCounter={kiwiCounter}
                     clickHandlerIncrement={() => setKiwiCounter(kiwiCounter + 1)}
                     clickHandlerDecrement={() => setKiwiCounter(kiwiCounter - 1)}
            ></Article>

            <Button
                buttonType="button"
                clickHandler={resetAllFruit}
            >Reset</Button>
        </>
    );
}

export default FruitCounterAndReset;