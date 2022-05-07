import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { useForm } from 'react-hook-form'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from './firebase'
function SendMail() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        addDoc(collection(db, "email"), {
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: serverTimestamp()
        });
        dispatch(closeSendMessage());
    }

    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message </h3>
                <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    placeholder='To'
                    type="email"
                    {...register("to", { required: true })}
                />
                {errors.to && <span className='sendMail__error'>To is required !</span>}
                <input
                    name='subject'
                    placeholder='Subject'
                    type="text"
                    {...register("subject", { required: true })}
                />
                {errors.subject && <span className='sendMail__error'>Subject is required !</span>}
                <input
                    name='message'
                    placeholder='Message...'
                    className='sendMail__message'
                    type="text"
                    {...register("message", { required: true })}
                />
                {errors.message && <span className='sendMail__error'>To is required !</span>}
                <div className='sendMail__options'>
                    <Button className='sendMail__send'
                        variant='contained' color='primary' type='submit'>
                        Send
                    </Button>

                </div>
            </form>
        </div>
    )
}

export default SendMail