import Link from "next/link";
import React from "react";
import AppSideNav from "../../components/appSideNav";
import PageTitle from "../../components/pageTitle";

const Step3 = () => {

    return <div>
        <div className='app-main'>
            <AppSideNav />

            <div className='app-view'>
                <PageTitle title='Create new portfolio' />

                <div className='app-view-content'>
                    <div className='app-view-content-wrapper'>

                        <div className='step-container'>
                            <h1>Pick your theme color</h1>
                            <div className='space-50' />
                            <input type='color' />
                        </div>

                        <div className='space-50' />

                        <div>
                            <div className='flex'>
                                <Link passHref={true} href='/create/step-2'><div className='btn ghost-btn'>&larr; &nbsp; Previous</div></Link>
                                <Link passHref={true} href='/preview'><div className='btn'>Go to preview &nbsp; &rarr;</div></Link>
                                {/* <div className="btn">Done</div> */}
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

export default Step3