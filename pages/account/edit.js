import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProjectItem from "../../components/projectItem";
import appProjectItem from "../../components/projectItem";
import AppSideNav from "../../components/appSideNav";
import BottomNav from "../../components/bottomNav";
import Button from "../../components/button";
import PersonalInfoContainer from "../../components/edit/personalInfoContainer";
import PageTitle from "../../components/pageTitle";
import CompanyItem from "../../components/companyItem";

const Edit = () => {
    const [showAddProjectModal, setShowAddProjectModal] = useState(false)
    const [showAddCompanyModal, setShowAddCompanyModal] = useState(false)
    const [projectsArray, setProjectsArray] = useState([])
    const [companiesArray, setCompaniesArray] = useState([])

    useEffect(() => {
        setProjectsArray([
            {
                name: "Uber clone",
                description: "lorem freaking ipsum hahaha its so long"
            },
        ])

        setCompaniesArray([
            {
                name: "Google LLC",
                description: "I sold pizza to the developers in a dolphin costume"
            },
        ])
    }, [])

    const addNewProject = () => {
        let newProject = {
            name: `Test Project ${(Math.random() * 10).toFixed(0)}`,
            description: "Hello world"
        }

        setProjectsArray([...projectsArray, newProject])
        setShowAddProjectModal(false)
    }

    const removeProject = (index) => {
        let projectsArrayClone = [...projectsArray]

        for (let i = 0; i < projectsArrayClone.length; i++) {
            const element = projectsArrayClone[i];
            if (element === projectsArrayClone[index]) {
                projectsArrayClone.splice(index, 1)
                setProjectsArray(projectsArrayClone)
                return
            }
        }
    }

    const addCompany = () => {
        let newCompany = {
            name: `Google LLC ${(Math.random() * 10).toFixed(0)}`,
            description: "I sold pizza to the developers in a dolphin costumeI sold pizza to the developers in a dolphin costume"
        }

        setCompaniesArray([...companiesArray, newCompany])
        setShowAddCompanyModal(false)
    }

    const removeCompany = (index) => {
        let companiesClone = [...companiesArray]

        for (let i = 0; i < companiesClone.length; i++) {
            const element = companiesClone[i];
            if (element === companiesClone[index]) {
                companiesClone.splice(index, 1)
                setCompaniesArray(companiesClone)
                return
            }
        }
    }

    const AddWorkModal = () => {
        if (showAddProjectModal) return <div className="modal">
            <div className="modal-content">
                <div className="flex-between">
                    <h2>Add a project</h2>
                    <b className="modal-close-btn" onClick={() => setShowAddProjectModal(false)}>Close &times;</b>
                </div>

                <div className="space-20" />

                <div>
                    <b>Name of project</b>
                    <input type='text' />
                </div>

                <div className="space-20" />

                <div>
                    <b>Photo of project</b>
                    <input type='file' />
                </div>

                <div className="space-20" />

                <div>
                    <b>Description</b>
                    <textarea type='text' placeholder="talk about the project, as well as how long it took you to build" />
                </div>

                <div className="space-20" />

                <Button onPressed={addNewProject} label='Add project' />
            </div>
        </div >

        return <></>
    }

    const AddCompanyModal = () => {
        if (showAddCompanyModal) return <div className="modal">
            <div className="modal-content">
                <div className="flex-between">
                    <h2>Add a previous company</h2>
                    <b className="modal-close-btn" onClick={() => setShowAddCompanyModal(false)}>Close &times;</b>
                </div>

                <div className="space-20" />

                <div>
                    <b>Company name</b>
                    <input type='text' />
                </div>

                <div className="space-20" />

                <div>
                    <b>Description</b>
                    <textarea type='text' placeholder="talk about how long youve worked there, as well as your role in thhe company" />
                </div>

                <div className="space-20" />

                <Button onPressed={addCompany} label='Add company ' />
            </div>
        </div >

        return <></>
    }

    return <div className='app-main'>
        <AppSideNav />
        <BottomNav />
        <AddWorkModal />
        <AddCompanyModal />

        <div className='app-view'>
            <PageTitle title='Edit profile' />
            <div className='app-view-content'>
                <div className='app-view-content-wrapper'>
                    <div className="flex inner-page-title-btns">
                        <Button label='Save changes' />
                        <div className="space-50" />
                        <Link passHref={true} href='/account/preview'><div className="btn ghost-btn">Preview</div></Link>
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
                                <b>Instagram Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <div>
                                <b>LinkedIn Profile</b>
                                <input type='text' />
                                <div className="space-50" />
                            </div>

                            <details>
                                <summary>Add more socials</summary>
                                <div className="space-50" />
                                <div>
                                    <div>
                                        <b>GitHub Profile</b>
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
                            </details>


                        </div>
                    </div>

                    <div className="space-30" />

                    <div className="container">
                        <div className="container-title">
                            <h2>Your projects</h2>
                            <div><Button onPressed={() => setShowAddProjectModal(true)} label='Add a project' /></div>
                        </div>

                        <div className="projects-container">
                            {
                                projectsArray.map((project, index) => {
                                    return <ProjectItem onRemove={() => removeProject(index)} key={index} name={project.name} description={project.description} />
                                })
                            }
                        </div>
                    </div>

                    <div className="space-30" />

                    <div className="container">
                        <div className="container-title">
                            <h2>Previous companies</h2>
                            <div><Button onPressed={() => setShowAddCompanyModal(true)} label='Add a company' /></div>
                        </div>

                        <div className="projects-container">
                            {
                                companiesArray.map((company, index) => {
                                    return <CompanyItem onRemove={() => removeCompany(index)} key={index} name={company.name} description={company.description} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}

export default Edit