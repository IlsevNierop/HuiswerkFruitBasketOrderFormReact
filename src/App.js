import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';
import Button from "./components/Button";
import InputField from "./components/InputField";
import Article from "./components/Article";

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
            <h1>Fruitmand bezorgservice</h1>
            <Article fruitName="🍌 Bananen"
                     fruitCounter={bananaCounter}
                     setFruitCounter={setBananaCounter}
            ></Article>
            <Article fruitName="🍓 Aardbeien"
                     fruitCounter={strawberryCounter}
                     setFruitCounter={setStrawberryCounter}
            ></Article>
            <Article fruitName="🍏 Appels"
                     fruitCounter={appleCounter}
                     setFruitCounter={setAppleCounter}
            ></Article>
            <Article fruitName="🥝 Kiwi's"
                     fruitCounter={kiwiCounter}
                     setFruitCounter={setKiwiCounter}
            ></Article>

            <Button
                buttonType="button"
                clickHandler={resetAllFruit}
            >Reset</Button>

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

                <InputField
                    type="radio"
                    name="period"
                    label="Overdag"
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
                </InputField>
                <InputField
                    type="radio"
                    name="period"
                    label="'s Avonds'"
                    value="evening"
                    validation={{
                        required: {
                            value: true,
                            message: "Je moet kiezen tussen overdag of 's avonds"
                        }
                    }}
                    register={register}
                    errors={errors}
                >
                </InputField>


                <label htmlFor="comments-field">
                    Opmerking
                    <textarea
                        name="comments"
                        id="comments-field"
                        cols="30"
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
                {/*<input*/}
                {/*    type="checkbox"*/}
                {/*    {...register("terms-and-conditions", {*/}
                {/*        required:*/}
                {/*            {*/}
                {/*                value: true,*/}
                {/*                message: "Om te kunnen bestellen moet je akkoord gaan met de algemene voorwaarden"*/}
                {/*            }*/}
                {/*    })}*/}
                {/*/>*/}
                {/*Ik ga akkoord met de voorwaarden*/}
                {/*{errors['terms-and-conditions'] && <p>{errors['terms-and-conditions'].message}</p>}*/}
                <Button
                    buttonType="submit"
                    // buttonDisabled={data.terms-and-conditions}
                >Verzend</Button>
            </form>

        </>
    );
}

export default App;
