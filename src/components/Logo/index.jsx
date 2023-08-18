import React from 'react'
import logo from '../../../public/logo.png'
import './index.scss'
const Logo = ({width, height}) => {
  return <img id='logo' style={{height : `${height}`, width : `${width}` }} src={logo} alt="" />
}

export default Logo
