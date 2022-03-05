import React from 'react'
import AppSideNav from '../components/appSideNav'

const AppHome = () => {
    return <div>
        <div className='app-main'>
            <AppSideNav />
            <div className='app-view'>
                <h1>Welcome Jeff 👋</h1>
            </div>
        </div>
    </div>
}

export default AppHome 