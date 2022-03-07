import React from 'react'
import AppSideNav from '../../components/appSideNav'
import BottomNav from '../../components/bottomNav'
import PageTitle from '../../components/pageTitle'

const Settings = () => {
    return <div>
        <div>
            <div className='app-main'>
                <AppSideNav />
                <BottomNav />
                <div className='app-view'>
                    <PageTitle title='Settings &amp; preferences' />

                    <div className='app-view-content'>


                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Settings 