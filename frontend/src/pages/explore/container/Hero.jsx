import React, { useState } from 'react'
import SearchBar from '../../../components/SearchBar';

const Hero = () => {


    return (
        <div className="bg-[#222B45] w-full h-[6rem] rounded-b-full flex items-center justify-center">
            <div className="bg-white mt-24 md:mt-24 w-11/12 md:w-3/4 lg:w-2/3 h-auto rounded-xl p-4">
            <SearchBar />
            </div>
        </div>
    )
}

export default Hero