import React from 'react';

import SignIn from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/signup.component';

import './signin-signup.styles.scss';

const SigInSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SigInSignUpPage