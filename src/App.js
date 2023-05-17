import React, {useState} from 'react';
import './App.css';
import Article from "./components/Article";
import Button from "./components/Button";
import FruitCounterAndReset from "./components/FruitCounterAndReset";

function App() {

    const [formState, setFormState] = useState({
        firstname: '',
        lastname: '',
        age:0,
        postcode:'',
        deliveryFrequency:'weekly',
        period:'day',
        comments:'',
        termsAndConditions: false
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }


    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitCounterAndReset></FruitCounterAndReset>

            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname-field">Voornaam
                    <input type="text"
                           id="firstname-field"
                           name="firstname"
                           value={formState.firstname}
                           onChange={handleChange}
                    />
                </label>
                <label htmlFor="lastname-field">Achternaam
                    <input type="text"
                           id="lastname-field"
                           name="lastname"
                           value={formState.lastname}
                           onChange={handleChange}
                    />
                </label>
                    <label htmlFor="age-field">Leeftijd
                    <input type="number"
                           id="age-field"
                           name="age"
                           value={formState.age}
                           onChange={handleChange}
                    />
                </label>
                <label htmlFor="postcode-field">Postcode
                    <input type="text"
                           id="postcode-field"
                           name="postcode"
                           value={formState.postcode}
                           onChange={handleChange}
                    />
                </label>
                <label htmlFor="delivery-frequency-field">Bezorgfrequentie
                <select
                    name="deliveryFrequency"
                    id="delivery-frequency-field"
                    value={formState.deliveryFrequency}
                    onChange={handleChange}>
                    <option value="weekly">Iedere week</option>
                    <option value="every-other-week">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>
                </label>

                <label>
                    Overdag
                    <input
                        type="radio"
                        name="period"
                        value="day"
                        checked={formState.period === "day"}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    's Avonds
                    <input
                        type="radio"
                        name="period"
                        value="evening"
                        checked={formState.period === "evening"}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="comments-field">
                    Opmerking
                    <textarea
                        name="comments"
                        id="comments-field"
                        cols="30"
                        rows="10"
                        value={formState.comments}
                        onChange={handleChange}
                    ></textarea>
                </label>
                    <input
                        type="checkbox"
                        name="termsAndConditions"
                        checked={formState.termsAndConditions}
                        onChange={handleChange}
                    />
                    Ik ga akkoord met de voorwaarden
                <Button
                 buttonType="submit"
                 clickHandler={handleSubmit}
                 buttonDisabled={formState.termsAndConditions === false}
                >Verzend</Button>
            </form>

        </>
    );
}

export default App;
