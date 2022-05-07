import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import TuneIcon from '@mui/icons-material/Tune';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { signOut } from 'firebase/auth'
import { auth } from './firebase';
function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutt = () => {
        let confirmAction = window.confirm("areyousurewant to logout ?");
        console.log(confirmAction);
        if (confirmAction) {
            signOut(auth).then(() => {
                dispatch(logout());
            })
        }

    }
    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt='' />
            </div>
            <div className='header__middle'>
                <SearchIcon />
                <input placeholder='Search mail' type="text" />
                <IconButton>
                    <TuneIcon className='header__inputCaret' />
                </IconButton>
            </div>
            <div className='header__right'>
                <IconButton>
                    <HelpIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Avatar onClick={logoutt} src={user?.photoURL} />
            </div>
        </div >
    )
}

export default Header