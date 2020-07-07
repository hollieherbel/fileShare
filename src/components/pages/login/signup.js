import React from 'react'

export default function signup(props) {
   
return (

    <form onSubmit={props.handleSubmit}>
    <input type="text" name="usernameInput" 
    placeholder="Username" value={props.usernameInput} onChange={props.handleChange}></input>
    <input type="password" name="passwordInput" 
    placeholder="Password" value={props.passwordInput} onChange={props.handleChange}></input>
    <button type="submit">Sign Up</button>
    </form>

    )
}
