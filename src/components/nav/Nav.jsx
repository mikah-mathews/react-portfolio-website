import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {BiUserCircle} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineContactSupport} from 'react-icons/md'
import {AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href='#' className='active'><BiHomeAlt /></a>
      <a href='#about'><BiUserCircle /></a>
      <a href='#experience'><BiBook /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav