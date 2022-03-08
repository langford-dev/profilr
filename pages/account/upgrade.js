import React from 'react'
import AppSideNav from '../../components/appSideNav'
import BottomNav from '../../components/bottomNav'
import EmptyState from '../../components/emptyState'
import PageTitle from '../../components/pageTitle'

const Upgrade = () => {
    return <div>
        <div className='app-main'>
            <AppSideNav />
            <BottomNav />
            <div className='app-view'>
                <PageTitle title='Upgrade' />
                <EmptyState label='You dont have access to this page' />

                {/* <div className='app-view-content'>


                </div> */}
            </div>
        </div>
    </div>
}

export default Upgrade 