import React from 'react'

export default function login(props) {
    

 
    return (
    <form onSubmit={props.handleSubmit}>
    <input type="text" name="usernameInput" 
    placeholder="Username" value={props.usernameInput} onChange={props.handleChange}></input>
    <input type="password" name="passwordInput" 
    placeholder="Password" value={props.passwordInput} onChange={props.handleChange}></input>
    <button type="submit">Login</button>
    
    <p onClick={props.handleClick}>Don't have an account? Click here to sign up!</p>
    </form>
    )
}