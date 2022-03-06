import Link from "next/link";
import React, { useState, useContext } from "react";
import AppSideNav from "../../components/appSideNav";
import PageTitle from "../../components/pageTitle";
import ProfilrContext from "../../context/appContext";

const Step1 = () => {
    const { appWindow, formatUsername } = useContext(ProfilrContext);
    const [username, setUsername] = useState('')

    setTimeout(() => {

        if (appWindow && appWindow) {

            let usernameFromStorage = appWindow.sessionStorage.getItem('step-username')

            if (usernameFromStorage && usernameFromStorage) setUsername(usernameFromStorage)
        }

    }, 10);

    const setUsernameValues = (val) => {

        if (appWindow && appWindow) {
            setUsername(formatUsername(val))
            appWindow.sessionStorage.setItem('step-username', val)
        }
    }

    return <div>
        <div className='app-main'>
            <AppSideNav />

            <div className='app-view'>
                <PageTitle title='Create new portfolio' />

                <div className='app-view-content'>
                    <div className='app-view-content-wrapper'>

                        <div className='step-container'>
                            <h1>Pick a username </h1>
                            <div className='space-50' />
                            <div className='flex'>
                                <p>profilr.com/ </p> &nbsp; &nbsp; <input value={username} onChange={e => setUsernameValues(e.target.value)} type='text' placeholder='langford' />
                            </div>
                        </div>


                        <div className='space-50' />

                        <div>
                            <div className='flex'>
                                <Link passHref={true} href='/create/home'><div className='btn ghost-btn'>&larr; &nbsp; Cancel</div></Link>

                                {
                                    username !== '' ? <Link passHref={true} href='/create/step-2'><div className='btn'>Next &nbsp; &rarr;</div></Link> : <></>
                                }
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