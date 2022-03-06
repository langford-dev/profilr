import Link from "next/link";
import React from "react";
import AppSideNav from "../../components/appSideNav";
import PageTitle from "../../components/pageTitle";

const Step1 = () => {

    return <div>
        <div className='app-main'>
            <AppSideNav />

            <div className='app-view'>
                <PageTitle title='Create new portfolio' />

                <div className='app-view-content'>
                    <div className='app-view-content-wrapper'>

                        <div>
                            <h1>Pick a username?</h1>
                            <div className='space-50' />
                            <div className='flex'>
                                <p>profilr.com/ </p> &nbsp; &nbsp; <input type='text' placeholder='langford' />
                            </div>
                        </div>


                        <div className='space-50' />

                        <div>
                            <div className='flex'>
                                <Link href='/create/home'><div className='btn ghost-btn'>&larr; &nbsp; Cancel</div></Link>
                                <Link href='/create/step-2'><div className='btn'>Next &nbsp; &rarr;</div></Link>
                            </div>
                            <div className='space-50' />
                            <p className='fade-text'>This information will be displayed on your portfolio site</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Step1