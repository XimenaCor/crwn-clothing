import React from 'react';

import './signin-signup.styles.scss';
import SignIn from '../../components/sign-in/signin.component';
import SignUp from '../../components/sign-up/signup.component';

const SigInSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SigInSignUpPage