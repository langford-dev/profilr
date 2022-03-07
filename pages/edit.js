import Link from "next/link";
import React, { useState } from "react";
import AppSideNav from "../components/appSideNav";
import Button from "../components/button";
import PersonalInfoContainer from "../components/edit/personalInfoContainer";
import PageTitle from "../components/pageTitle";

const Edit = () => {
    const [showAddWorkModal, setShowAddWorkModal] = useState(false)

    const AddWorkModal = () => {
        // return <></>
        if (showAddWorkModal) return <div className="modal" onClick={() => setShowAddWorkModal(false)}>
            <div className="modal-content">
                <h2>Add your work</h2>
            </div>
        </div>

        return <></>
    }

    return <div className='app-main'>
        <AppSideNav />

        <AddWorkModal />

        <div className='app-view'>
            <div className='app-view-content'>
                <div className='app-view-content-wrapper'>

                    <div className="flex-between">
                        <h1>Edit your profile</h1>
                        <Link href='/preview'><div className="btn">Preview</div></Link>
                    </div>
                    <div className="space-20" />
                    <p>These changes are public and will reflect in your profile page</p>
                    <div className="space-50" />

                    <div className="container flex-container">

                        <PersonalInfoContainer />

                        <div className="container-child socials-container">
                            <h2>Your socials</h2>
                            <div className="space-30" />

                            <div>
                                <b>Twitter Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>GitHub Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>LinkedIn Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Instagram Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Stackoverflow Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Behance profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Hashnode Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>Dev.to Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>
                        </div>
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

export default Edit