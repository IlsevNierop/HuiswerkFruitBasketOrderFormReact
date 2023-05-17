import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';
import Button from "./components/Button";
import FruitCounterAndReset from "./components/FruitCounterAndReset";
import TextInput from "./components/TextInput";

function App() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    // const [formState, setFormState] = useState({
    //     deliveryFrequency:'weekly',
    //     period:'day',
    //     comments:'',
    //     termsAndConditions: false
    // });

    // function handleChange(e) {
    //     const changedFieldName = e.target.name;
    //     const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    //
    //     setFormState({
    //         ...formState,
    //         [changedFieldName]: newValue,
    //     });
    // }

    function handleFormSubmit(data) {
        console.log("hier moet alles komen");
        console.log(data);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitCounterAndReset></FruitCounterAndReset>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <label htmlFor="firstname-field">Voornaam
                    <input type="text"
                           id="firstname-field"
                           {...register("firstname",
                               {
                                   required:
                                       {
                                           value: true,
                                           message: "Dit veld is verplicht",
                                       },
                                   validate: (value) => value.includes('a') || 'Voornaam moet een a bevatten',
                               })
                           }
                    />
                    {errors.firstname && <p>{errors.firstname.message}</p>}
                </label>
                <label htmlFor="lastname-field">Achternaam
                    <input type="text"
                           id="lastname-field"
                           {...register("lastname",
                               {
                                   required: {
                                       value: true,
                                       message: "Dit veld is verplicht"
                                   }, minLength:
                                       {
                                           value: 5,
                                           message: "Dit veld moet minstens 5 karakters bevatten"
                                       }
                               })}
                    />
                    {errors.lastname && <p>{errors.lastname.message}</p>}
                </label>
                <label htmlFor="age-field">Leeftijd
                    <input type="number"
                           id="age-field"
                           {...register("age",
                               {
                                   required: {
                                       value: true,
                                       message: "Dit veld is verplicht"
                                   }, min:
                                       {
                                           value: 18,
                                           message: "Je moet minstens 18 jaar zijn om te kunnen bestellen"
                                       }
                               })}
                    />
                    {errors.age && <p>{errors.age.message}</p>}
                </label>
                <label htmlFor="postcode-field">Postcode
                    <input type="text"
                           id="postcode-field"
                           {...register("postcode",
                               {
                                   required:
                                       {
                                           value: true,
                                           message: "Dit veld is verplicht"
                                       }
                               })}

                    />
                    {errors.postcode && <p>{errors.postcode.message}</p>}
                </label>
                <label htmlFor="delivery-frequency-field">Bezorgfrequentie
                    <select
                        id="delivery-frequency-field"
                        {...register("delivery-frequency")}>
                        <option value="weekly">Iedere week</option>
                        <option value="every-other-week">Om de week</option>
                        <option value="monthly">Iedere maand</option>
                    </select>
                </label>

                <label>
                    Overdag
                    <input
                        type="radio"
                        value="day"
                        {...register("period", {
                            required:
                                {
                                    value: true,
                                    message: "Je moet kiezen tussen overdag of 's avonds"
                                }
                        })}
                    />
                </label>
                <label>
                    's Avonds
                    <input
                        type="radio"
                        value="evening"
                        {...register("period", {
                            required:
                                {
                                    value: true,
                                    message: "Je moet kiezen tussen overdag of 's avonds"
                                }
                        })}
                    />
                    {errors.period && <p>{errors.period.message}</p>}
                </label>
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
                <input
                    type="checkbox"
                    {...register("terms-and-conditions", {
                        required:
                            {
                                value: true,
                                message: "Om te kunnen bestellen moet je akkoord gaan met de algemene voorwaarden"
                            }
                    })}
                />
                Ik ga akkoord met de voorwaarden
                {errors['terms-and-conditions'] && <p>{errors['terms-and-conditions'].message}</p>}
                <Button
                    buttonType="submit"
                    // buttonDisabled={data.terms-and-conditions}
                >Verzend</Button>
            </form>

        </>
    );
}

export default App;
