import Link from 'next/link'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import AppSideNav from '../../components/appSideNav'
import PageTitle from '../../components/pageTitle'
import StepComponents from '../../components/stepComponents'

const Create = () => {
    return <div>
        <div className='app-main'>
            <AppSideNav />
            <div className='app-view'>
                <PageTitle title="Create new portfolio" />

                <div className='app-view-content'>
                    <div className='app-view-content-wrapper'>
                        <div>
                            <h1>Lets build your portfolio website</h1>
                            <div className='space-50' />
                            <Link passHref={true} href="/create/step-1"><div className='btn'>Let's go! &rarr;</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Create 