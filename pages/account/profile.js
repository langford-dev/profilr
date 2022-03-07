import Link from "next/link";
import React from "react";
import { Github, Linkedin, Twitter } from "../../assets/icons";
import Image from "next/image";
import ProfileHeader from "../../components/profileHeader";
import Fab from "../../components/fab";

const Profile = () => {

    return <div>
        <main>
            <div className="main-wrapper">
                <ProfileHeader />

                <Fab />

                <section className="flex flex-center hero flex-column first-section">
                    <Image width="200px" height="200px" src="https://pbs.twimg.com/profile_images/1494065115628548099/IOVenzqn_400x400.jpg" alt="langford avatar" className="avatar-lg" />
                    <div className="space-50" />
                    <div className="flex-column">
                        <h1>Hey, 👋 Im Langford Kwabena</h1>
                        <div className="space-10" />
                        <p className="subtext">Web developer</p>
                    </div>

                    <div className="space-20" />

                    <div className="flex">
                        <Github />
                        <div className="space-30" />
                        <Linkedin />
                        <div className="space-30" />
                        <Twitter />
                    </div>
                </section>

                <section id="about-me">
                    <h1 className="text-align-center">About <span className="primary-color">Me</span></h1>
                    <div className="space-50" />
                    <p>
                        Hello 👋 I’m Langford. A self-taught Web(3) & Software developer, Content creator and Technical Writer ✍️

                        I have over 3+ years of industry experience.

                        I enjoy learning new technologies and writing about what I discover 💛

                        My favorite languages are JavaScript, HTML and CSS. I am well-versed in frameworks such as React, Vue.js, React Native, Flutter
                    </p>
                </section>

                <div className="line" />

                <section id="my-experience">
                    <h1 className="text-align-center">My <span className="primary-color">Experience</span> </h1>
                    <div className="space-50" />
                    <div className="space-50" />

                    <ul className="experience-container">
                        <li className="experience-item">
                            <h3>HTML - 95%</h3>
                            <input type="range" value="95" onChange={() => { }} />
                        </li>
                        <li className="experience-item">
                            <h3>CSS - 93%</h3>
                            <input type="range" value="93" onChange={() => { }} />
                        </li>
                        <li className="experience-item">
                            <h3>JavaScript - 90%</h3>
                            <input type="range" value="90" onChange={() => { }} />
                        </li>
                        <li className="experience-item">
                            <h3>React - 90%</h3>
                            <input type="range" value="90" onChange={() => { }} />
                        </li>
                    </ul>
                </section>

                <div className="line" />

                <section id="my-works">
                    <h1 className="text-align-center">My <span className="primary-color">Works</span></h1>
                    <div className="space-50" />
                    <ul className="my-works-container">
                        <li className="my-work-item">
                            <div className="my-work-img" />
                            <div className="space-20" />
                            <Link passHref={true} href="/">google.com</Link>
                            <p>Description</p>
                        </li>
                        <li className="my-work-item">
                            <div className="my-work-img" />
                            <div className="space-20" />
                            <Link passHref={true} href="/">google.com</Link>
                            <p>Description</p>
                        </li>
                        <li className="my-work-item">
                            <div className="my-work-img" />
                            <div className="space-20" />
                            <Link passHref={true} href="/">google.com</Link>
                            <p>Description</p>
                        </li>
                        <li className="my-work-item">
                            <div className="my-work-img" />
                            <div className="space-20" />
                            <Link passHref={true} href="/">google.com</Link>
                            <p>Description</p>
                        </li>
                    </ul>
                </section>
            </div>

            <footer className="text-align-center">
                Profilr • &copy;2022 All Rights Reserved • Made with 💛
            </footer>
        </main>
    </div>
}

export default Profile