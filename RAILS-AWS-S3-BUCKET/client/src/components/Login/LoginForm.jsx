import React, { Component } from 'react'
import './LoginForm.css'

export default class LoginForm extends Component {

    render() {
        return (
            <form>
                <input id="name" type="text" name="name" placeholder="Name" autoFocus/>
                <input id="email" type="text" name="email" placeholder="Email" />
                <input id="password" type="password" name="password" placeholder="Password" />
                <input id="file" type="file" name="picture" />
                <input type="submit" id="button" name="" value="submit" />
            </form>
        )
    }
}
