import { useState } from "react";
import Navbar from "./Navbar";

const ContactApp = () => {
    const [state, setState] = useState({
        fname: '',
        lname: '',
        message: '',
        carBrand: '',
        isChecked: false,
        sex: '',
        price: 0,
    });

    const carBrands = ["Toyota", "Lexus", "BMW", "Honda"]

    const carBrandOptions = carBrands.map((brand, key) => (
            <option value={brand} key={key}>{brand}</option>
    ));

    const handleChange = (e) =>{
        const value = e.target.type ==='checkbox'? e.target.checked : e.target.value;
        setState((state) => ({
            ...state,
            [e.target.name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
    };

    return (
        <>
            <Navbar />

            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <label>First name: {''}
                    <input name="fname" type="text" value={state.fname} onChange={handleChange} />
                </label><br />
                <label>Last name: {''}
                    <input name="lname" type="text" value={state.lname} onChange={handleChange} />
                </label><br />
                <label>
                    Your message: 
                    <textarea name="message" placeholder="Enter your message" value={state.message} onChange={handleChange} />
                </label><br />
                <label>
                    Car brand:
                    <select name="carBrand" value={state.carBrand} onChange={handleChange}>
                        <option value={''} disabled>Pick a car brand</option>
                        {carBrandOptions}
                    </select>
                </label><br />
                <label>
                    <input type="checkbox" name="isChecked" value={state.isChecked} onChange={handleChange} />
                    Is checked?
                </label><br />
                <label>
                    <input type="radio" name="sex" value="male" checked={state.sex === "male"} onChange={handleChange} />
                    {''} Male
                </label>
                <label>
                    <input type="radio" name="sex" value="female" checked={state.sex === "female"} onChange={handleChange} />
                    {''} Female
                </label><br />
                <label>
                    Price (between 0 and 50) {''}<br />
                    <input type="range" name="price" value={state.price} min="0" max="50" onChange={handleChange} />
                </label><br />

                <button>Submit</button>
            </form>
            <h3>Name: {state.fname} {state.lname}</h3>
            <h4>Message: {state.message}</h4>
            <h4>Favourite car brand: {state.carBrand}</h4>
            <h4>Is it checked?: {state.isChecked? 'Yes': 'No'}</h4>
            <h4>Sex / Gender: {state.sex}</h4>
            <h4>Price: ${state.price}</h4>
        </>

    );
};

export default ContactApp;