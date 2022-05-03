import React from 'react'
import './SendMail.css'
import CloseIcon from '@mui/icons-material/Close'
import { Button, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function SendMail() {
    function sendMessage(e) {
        e.preventDefault();
        alert('oke');
    }
    function optionSend(e) {
        e.preventDefault();
        alert('joss');
    }
    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message </h3>
                <CloseIcon className="sendMail__close" />
            </div>
            <form>
                <input
                    name='to'
                    placeholder='To'
                    type="email"
                />
                <input
                    name='subject'
                    placeholder='Subject'
                    type="text"
                />
                <input
                    name='message'
                    placeholder='Message...'
                    className='sendMail__message'
                    type="text"
                />

                <div className='sendMail__options'>
                    <Button onClick={sendMessage} className='sendMail__send'
                        variant='contained' color='primary' type='submit'>
                        Send
                        <IconButton onClick={optionSend} type='button'>
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Button>

                </div>
            </form>
        </div>
    )
}

export default SendMail