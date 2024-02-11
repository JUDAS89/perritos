import React from 'react'
import Button from 'react-bootstrap/Button'
import './style.css'

const Tags=({colorButton,textButton})=>{
    return(
        <>
            <Button className='button' variant={colorButton}>{textButton}</Button>
        </>
    )
}

export default Tags 