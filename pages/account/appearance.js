import Link from "next/link";
import React from "react";
import AppSideNav from "../../components/appSideNav";
import BottomNav from "../../components/bottomNav";
import Button from "../../components/button";
import PageTitle from "../../components/pageTitle";

const Appearance = () => {
    return <div className='app-main'>
        <AppSideNav />
        <BottomNav />

        <div className='app-view'>
            <PageTitle title='Edit profile' />
            <div className='app-view-content'>
                <div className='app-view-content-wrapper'>
                    {/* <div className="flex inner-page-title-btns">
                        <Button label='Save changes' />
                        <div className="space-50" />
                        <Link passHref={true} href='/account/preview'><div className="btn ghost-btn">Preview</div></Link>
                    </div>
                    <div className="space-20" />
                    <p>These changes are public and will reflect in your profile page</p>
                    <div className="space-50" /> */}

                    <div className="container flex-container">
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
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Appearance