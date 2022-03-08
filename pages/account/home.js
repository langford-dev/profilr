import React from 'react'
import AppSideNav from '../../components/appSideNav'
import BottomNav from '../../components/bottomNav'
import PageTitle from '../../components/pageTitle'

const Home = () => {
    return <div>
        <div className='app-main'>
            <AppSideNav />
            <BottomNav />
            <div className='app-view'>
                <PageTitle title='Analytics' />

                <div className='app-view-content'>

                    <div className='flex'>
                        <div className='container content-width'>
                            <b>Total clicks</b>
                            <h1>520</h1>
                        </div>
                        <div className='container content-width'>
                            <b>Views</b>
                            <h1>520</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home 