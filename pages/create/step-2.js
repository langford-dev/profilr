import Link from "next/link";
import React from "react";
import AppSideNav from "../../components/appSideNav";
import PageTitle from "../../components/pageTitle";

const Step2 = () => {

    return <div>
        <div className='app-main'>
            <AppSideNav />

            <div className='app-view'>
                <PageTitle title='Create new portfolio' />

                <div className='app-view-content'>
                    <div className='app-view-content-wrapper'>

                        <div className='step-container'>
                            <h1>What is your name?</h1>
                            <div className='space-50' />
                            <input type='text' placeholder='Langford Musk' />
                        </div>

                        <div className='space-50' />

                        <div>
                            <div className='flex'>
                                <Link passHref={true} href='/create/step-1'><div className='btn ghost-btn'>&larr; &nbsp; Previous</div></Link>
                                <Link passHref={true} href='/create/step-3'><div className='btn'>Next &nbsp; &rarr;</div></Link>
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

export default Step2