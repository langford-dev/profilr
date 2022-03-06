import Image from "next/image";
import Link from "next/link";
import React from "react";

const Style1 = (props) => {
    return <section className="template-main-view">
        <section className="width-100 template-panel">
            <section>
                <Image width="200px" height="200px" src="https://pbs.twimg.com/profile_images/1494065115628548099/IOVenzqn_400x400.jpg" alt="langford avatar" className="avatar-lg" />
                <div className="space-50" />
                {/* <h2>Hey, 👋</h2> */}
                <div className="space-20" />
                <h1>Langford Kwabena</h1>
                <div className="space-20" />
                <h2 className="fade-text">Web developer</h2>

                <div className="space-50" />
                <div className="line" />
                <div className="space-50" />
            </section>

            <section>
                <h1 className="template-section-title">About me</h1>
                <div className="space-30" />
                <p>
                    Hello 👋 I’m Langford. A self-taught Web(3) and Software developer, Content creator and Technical Writer ✍️
                    I have over 3+ years of industry experience.
                    I enjoy learning new technologies and writing about what I discover 💛
                    My favorite languages are JavaScript, HTML and CSS. I am well-versed in frameworks such as React, Vue.js, React Native, Flutter
                </p>
            </section>

            <section>
                <div className="space-50" />
                <div className="line" />
                <div className="space-50" />
            </section>

            <section id="my-experience">
                <h1 className="template-section-title">My Experience</h1>
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

            <section>
                <div className="space-50" />
                <div className="line" />
                <div className="space-50" />
            </section>

            <section id="my-works">
                <h1 className="template-section-title">My Works</h1>
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

            <footer className="text-align-center">
                Profilr • &copy;2022 All Rights Reserved • Made with 💛
            </footer>
        </section>
    </section>
}

export default Style1