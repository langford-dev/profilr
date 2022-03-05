import React from 'react'
import { BellIcon, Create, SettingsIcon } from '../assets/icons'
import AppHeader from '../components/appHeader'
import AppSideNav from '../components/appSideNav'

const AppHome = () => {
    return <div>
        <AppHeader />

        <div className='app-main'>
            <AppSideNav />
            <div className='app-view'>
                <h1>Welcome Jeff 👋</h1>
            </div>
        </div>
    </div>
}

export default AppHome 