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
                            <Link passHref={true} href="/create/step-1"><div className='btn'>Lets go! &rarr;</div></Link>
                        </div>

                        {/* <div>
                            <h1>Pick a username?</h1>
                            <div className='space-50' />
                            <div className='flex'>
                                <p>profilr.com/ </p> &nbsp; &nbsp; <input type='text' placeholder='langford' />
                            </div>
                        </div>

                        <div className='space-50' />
                        <div className='space-50' />

                        <div>
                            <h1>What is your name?</h1>
                            <div className='space-50' />
                            <input type='text' placeholder='Langford Musk' />
                        </div>

                        <div className='space-50' />
                        <div className='space-50' />

                        <div>
                            <h1>Pick your theme color</h1>
                            <div className='space-50' />
                            <input type='color' />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Create 