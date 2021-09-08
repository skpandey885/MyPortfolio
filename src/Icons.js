import './Icons.css'
import React from 'react'
import {FaInstagram,FaLinkedin,FaGithub} from 'react-icons/fa'

export default function Icons() {


    return (
     <>
     
     <a href='https://www.instagram.com/iamsachin_47/' >
<FaInstagram size='2em' className='social'/>
</a>
<a href='https://www.linkedin.com/in/skpandey885/' >
<FaLinkedin  size='2em' className='social'/></a>
<a href='https://github.com/skpandey885' >
<FaGithub  size='2em' className='social'/></a>

     </>
    )
}
