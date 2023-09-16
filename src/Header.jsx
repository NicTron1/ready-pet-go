import React from 'react'
import BoneImg from './assets/bone.png'
import PersonIcon from '@mui/icons-material/Person'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <IconButton>
            <MenuIcon fontSize='large' className='header_icon'/>
        </IconButton>

        <IconButton>
            <img src={BoneImg} className='header_logo' alt="Bone"></img>
        </IconButton>

        <IconButton>
            <PersonIcon fontSize='large' className='header_icon'/>
        </IconButton>

    </div>
  )
}
