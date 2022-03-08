import Link from "next/link";
import React from "react";
import AppSideNav from "../../components/appSideNav";
import BottomNav from "../../components/bottomNav";
import Button from "../../components/button";
import EmptyState from "../../components/emptyState";
import PageTitle from "../../components/pageTitle";

const Appearance = () => {
    return <div className='app-main'>
        <AppSideNav />
        <BottomNav />

        <div className='app-view'>
            <PageTitle title='Appearance' />
            <div className='app-view-content'>
                <EmptyState label='More Themes coming soon' />
                {/* <div className='app-view-content-wrapper'> */}


                {/* <div className="container flex-container">
                        <h2>Pick a theme</h2>
                    </div>

                    <div className="space-30" />

                    <div className="container">
                        <div className="flex-between">
                            <h2>Your work</h2>
                            <div><Button onPressed={() => setShowAddWorkModal(true)} label='Add a project' /></div>
                        </div>

                        <div>

                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    </div >
}

export default Appearance