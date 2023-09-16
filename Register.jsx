import React, { useState } from "react";

export const Register = (props) =>
{
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [name, setName] = useState(' ');

    const handleSubmit = (e) => {
        // if we dont declare prevent default page gets reloaded, loses state
        e.preventDefault();
        console.log(email);
    }
    
    return (
        <div className ="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label>full name</label>
                <input value = {name} name="name" id = "name" placeholder = "full Name"/>
                <label htmlFor = "email">email</label>
                <input value = {email} onChange = {(e) => setEmail(e.target.value)}type = "email" placeholder = "yourname@gmail.com" id="email" name = "email"/>
                <label htmlFor = "password">password</label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type = "password" placeholder = "must be 8+ characters" id="password" name = "password"/>
                <button type="submit">Sign up</button>
                <button className = "link-btn" onClick = {() => props.onFormSwitch('login')}>Already have an account? Sign in here.</button>
            </form>
        </div>
    )

    return <>Register</>;
}