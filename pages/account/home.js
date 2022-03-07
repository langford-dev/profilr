import React from 'react'
import AppSideNav from '../../components/appSideNav'
import PageTitle from '../../components/pageTitle'

const Home = () => {
    return <div>
        <div className='app-main'>
            <AppSideNav />
            <div className='app-view'>
                <PageTitle title='Analytics' />

                <div className='app-view-content'>


                </div>
            </div>
        </div>
    </div>
}

export default Home 