import React from 'react'
import MainLayout from '../../components/MainLayout'
import Aside from './container/Aside'
import Main from './container/Main'

const LoginPage = () => {
    return (
        <MainLayout>
            <div className='flex flex-col md:flex-row h-screen mb-3'>
                <div className='hidden md:block w-full md:w-1/3 order-2 md:order-1'>
                    <Aside />
                </div>
                <div className='w-full md:w-2/3 order-1 md:order-2'>
                    <Main />
                </div>
            </div>
        </MainLayout>
    )
}

export default LoginPage