import React from 'react'
import AppSideNav from '../../components/appSideNav'
import BottomNav from '../../components/bottomNav'
import PageTitle from '../../components/pageTitle'

const Analytics = () => {
    return <div>
        <div className='app-main'>
            <AppSideNav />
            <BottomNav />
            <div className='app-view'>
                <PageTitle title='Analytics' />

                <div className='app-view-content'>

                </div>
            </div>
        </div>
    </div>
}

export default Analytics 