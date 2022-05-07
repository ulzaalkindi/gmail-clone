import { Button } from '@mui/material'
import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'
import { auth, provider } from './firebase'
import { login } from './features/userSlice';
function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(({ user }) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            })
            .catch((error) => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-3-1.png' alt='' />
                <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login