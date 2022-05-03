import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import TuneIcon from '@mui/icons-material/Tune';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
function Header() {
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
                <Avatar />
            </div>
        </div>
    )
}

export default Header