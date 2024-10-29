import React from 'react'
import loginbg from '../../../assets/loginbg.png'

const Aside = () => {
    return (
        <div 
            className="h-screen w-full bg-contain bg-no-repeat bg-start mt-6" 
            style={{ backgroundImage: `url(${loginbg})` }}
        >
        </div>
    )
}

export default Aside