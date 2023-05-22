import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';
import Button from "./components/Button";
import InputField from "./components/InputField";
import FruitCounterArticle from "./components/FruitCounterArticle";

function App() {
    const [bananaCounter, setBananaCounter] = useState(0);
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);

    function resetAllFruit() {
        setBananaCounter(0);
        setStrawberryCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onTouched"});

    function handleFormSubmit(data) {
        console.log(data);
        console.log(`Bestelling fruitmand: \n Bananen: ${bananaCounter} \n Aardbeien: ${strawberryCounter} \n Appels: ${appleCounter} \n Kiwi's: ${kiwiCounter}`);
    }

    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <h1>Fruitmand bezorgservice</h1>
                    <div className="fruit-counter">
                        <FruitCounterArticle fruitName="🍌 Bananen"
                                             fruitCounter={bananaCounter}
                                             setFruitCounter={setBananaCounter}
                        ></FruitCounterArticle>
                        <FruitCounterArticle fruitName="🍓 Aardbeien"
                                             fruitCounter={strawberryCounter}
                                             setFruitCounter={setStrawberryCounter}
                        ></FruitCounterArticle>
                        <FruitCounterArticle fruitName="🍏 Appels"
                                             fruitCounter={appleCounter}
                                             setFruitCounter={setAppleCounter}
                        ></FruitCounterArticle>
                        <FruitCounterArticle fruitName="🥝 Kiwi's"
                                             fruitCounter={kiwiCounter}
                                             setFruitCounter={setKiwiCounter}
                        ></FruitCounterArticle>

                        <Button className="reset-button"
                                buttonType="button"
                                clickHandler={resetAllFruit}
                        >Reset</Button>
                    </div>

                    <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <InputField
                            type="text"
                            name="firstname"
                            label="Voornaam"
                            validation={{
                                required:
                                    {
                                        value: true,
                                        message: "Dit veld is verplicht",
                                    }
                            }
                            }
                            register={register}
                            errors={errors}
                        >
                        </InputField>
                        <InputField
                            type="text"
                            name="lastname"
                            label="Achternaam"
                            validation={{
                                required:
                                    {
                                        value: true,
                                        message: "Dit veld is verplicht",
                                    }, minLength:
                                    {
                                        value: 5,
                                        message: "Dit veld moet minstens 5 karakters bevatten"
                                    }

                            }
                            }
                            register={register}
                            errors={errors}
                        >
                        </InputField>
                        <InputField
                            type="number"
                            name="age"
                            label="Leeftijd"
                            validation={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht"
                                }, min:
                                    {
                                        value: 18,
                                        message: "Je moet minstens 18 jaar zijn om te kunnen bestellen"
                                    }


                            }}
                            register={register}
                            errors={errors}
                        >
                        </InputField>
                        <InputField
                            type="text"
                            name="postcode"
                            label="Postcode"
                            validation={{
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht"
                                }
                            }}
                            register={register}
                            errors={errors}
                        >
                        </InputField>
                        <label htmlFor="delivery-frequency-field">Bezorgfrequentie
                            <select
                                id="delivery-frequency-field"
                                {...register("delivery-frequency")}>
                                <option value="weekly">Iedere week</option>
                                <option value="every-other-week">Om de week</option>
                                <option value="monthly">Iedere maand</option>
                            </select>
                        </label>

                        <div className="radio-button">
                            {/*    Ik wil eigenlijk maar 1 error message laten zien bij de validatie van de radio buttons, maar dat lukt me niet. */}
                            <InputField
                                type="radio"
                                name="delivery-moment"
                                value="day"
                                validation={{
                                    required: {
                                        value: true,
                                        message: "Je moet kiezen tussen overdag of 's avonds"
                                    }
                                }}
                                register={register}
                                errors={errors}
                            >
                                Overdag
                            </InputField>
                            <InputField
                                type="radio"
                                name="delivery-moment"
                                value="evening"
                                register={register}
                                validation={{
                                    required: {
                                        value: true,
                                        message: "Je moet kiezen tussen overdag of 's avonds"
                                    }
                                }}


                                errors={errors}
                            >
                                's Avonds
                            </InputField>
                        </div>


                        <label htmlFor="comments-field">
                            Opmerking
                            <textarea
                                name="comments"
                                id="comments-field"
                                cols="25"
                                rows="10"
                                {...register("comments")}
                            ></textarea>
                        </label>
                        <InputField
                            type="checkbox"
                            name="terms-and-conditions"

                            validation={{
                                required: {
                                    value: true,
                                    message: "Om te kunnen bestellen moet je akkoord gaan met de algemene voorwaarden"
                                }
                            }}
                            register={register}
                            errors={errors}
                        >Ik ga akkoord met de voorwaarden
                        </InputField>
                        <Button className="send-button"
                            buttonType="submit"
                        >Verzend</Button>
                    </form>
                </div>


            </div>

        </>
    );
}

export default App;
