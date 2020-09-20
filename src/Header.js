import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header__left'
            src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
            alt=''
            />
            </Link>
            <div className='header__center'>
                <input>
                </input>
                <SearchIcon className='header__centerIcon' />
            </div>
            <div className='header__right'>
                <p>Host</p>
                {/* <IconButton></IconButton> */}
                <LanguageIcon className='header__rightIcon' />
                <ExpandMoreIcon className='header__rightIcon' />
                <Avatar  className='header__rightIcon'/>
            </div>
        </div>
    )
}
