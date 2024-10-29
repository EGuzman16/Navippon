import React from 'react'
import registerbg from '../../../assets/registerbg.png'

const Aside = () => {
    return (
        <div 
            className="h-screen w-full bg-contain bg-no-repeat bg-start mt-6" 
            style={{ backgroundImage: `url(${registerbg})` }}
        >
        </div>
    )
}

export default Aside