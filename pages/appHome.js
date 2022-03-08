import React from 'react'
import AppSideNav from '../components/appSideNav'
import PageTitle from '../components/pageTitle'

const AppHome = () => {
    return <div>
        <div className='app-main'>
            <AppSideNav />
            <div className='app-view'>
                <PageTitle title='Welcome Jeff 👋' />

                <div className='app-view-content'>


                </div>
            </div>
        </div>
    </div>
}

export default AppHome 