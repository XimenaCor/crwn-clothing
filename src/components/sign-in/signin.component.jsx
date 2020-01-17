import React from 'react'

import './signin.styles.scss'
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = event  => {
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        handleChange={this.handleChange} 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        label='email' 
                        required />

                    <FormInput 
                        handleChange={this.handleChange} 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        label='password' 
                        required />

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn