"use client"; // TODO: optimize this into client/server

import Image from "next/image";
import headerImage from "@/public/images/header.jpg";
import andyImage from "@/public/images/andy.jpg";

//
// Blocks
//

function HeaderBlock() {
    return (
        <div className={"h-[300px] overflow-hidden mb-4 relative"}>
            <div className={"h-[200px] bg-gradient-to-b from-[#7db5f0] to-[#bbe0fa] relative"}>
                <Image
                    src={headerImage}
                    alt={""}
                    className={"absolute left-[0px] top-[0px] w-[100%] h-[100%] z-[0]"}
                    style={{ objectFit: "cover" }}
                    quality={85}
                    onDragStart={(e) => {
                        e.preventDefault();
                    }}
                />
                <div className={"max-w-[1000px] mx-auto relative z-[1]"}>
                    <Image
                        src={andyImage}
                        alt={"Andrew Davis"}
                        className={
                            "absolute left-[16px] top-[100px] w-[180px] h-[180px] z-[1] rounded-full ring-[6px] ring-white ring-opacity-100"
                        }
                        onDragStart={(e) => {
                            e.preventDefault();
                        }}
                    />
                    {/* image block content goes here! */}
                </div>
            </div>
            <div className={"absolute left-[0px] top-[200px] w-[100%] h-[25px] z-[0] bg-blue-300"}></div>
            <div className={"absolute left-[0px] top-[225px] w-[100%] h-[25px] z-[0] bg-blue-200"}></div>
            <div className={"absolute left-[0px] top-[250px] w-[100%] h-[25px] z-[0] bg-blue-100"}></div>
        </div>
    );
}

function InfoBlock() {
    return (
        <div className={"max-w-[1000px] mx-auto px-4 mb-12"}>
            <h1>Andrew Davis, Software Developer</h1>
            <p>Welcome to my homepage!</p>
            <p>
                I am a highly driven software generalist with 20+ years of real world experience. My passion is building
                and evolving enterprise applications by using state-of-the-art technology.
            </p>
        </div>
    );
}

function TechnicalSkillsBlock() {
    return (
        <div className={"max-w-[1000px] mx-auto px-4 mb-12"}>
            <h2>Technical Skills</h2>
            <p>My career has taken me to many different directions of computer science. I am skilled in:</p>
            <ul>
                <li>Web, Application, Systems, and Game Programming</li>
                <li>Cloud, DevOps, and System Administration</li>
                <li>Project Management</li>
                <li>Digital Artwork</li>
            </ul>
            <p>But more specifically...</p>
            <h3>Programming languages and frameworks</h3>
            <p>
                C/C++, C#, CSS, HTML5, Objective C, Java, JavaScript, PHP, Python, React, Solidity, TypeScript, Unity.
            </p>
            <h3>Databases</h3>
            <p>MongoDB, MySQL, PostgreSQL, Redis, SQLite.</p>
            <h3>Cloud platforms</h3>
            <p>AWS, Azure, CloudFlare, Digital Ocean, Vercel, Vultr.</p>
            <h3>Operating systems</h3>
            <p>BSD (FreeBSD, OpenBSD), Linux (Ubuntu, Debian), MacOS, iOS, Windows, Windows Server.</p>
            <h3>Graphic design</h3>
            <p>After Effects, Cinema4D, Illustrator, Inkscape, Photoshop.</p>
        </div>
    );
}

function WorkHistoryBlock() {
    return (
        <div className={"max-w-[1000px] mx-auto px-4 mb-12"}>
            <h2>Work History</h2>
            <ul>
                <li>2021-Present: Self Employed</li>
                <li>2018-2020: Vultr, Cloud Storage Engineer</li>
                <li>2016-2018: Vultr, Platform Developer</li>
                <li>2014-2016: Vultr, Frontend Engineer</li>
                <li>2010-2014: GameServers, Backend Engineer</li>
                <li>2006-2010: GameServers, Software Engineer</li>
                <li>2004-2012: Delusions, Software Contractor</li>
            </ul>
            [Download Full Resume]
            <h3>Visual Portfolio</h3>
            [Add photos]
        </div>
    );
}

function InterestsBlock() {
    return (
        <div className={"max-w-[1000px] mx-auto px-4 mb-12"}>
            <h2>Personal Interests</h2>
            <h3>Pet Projects</h3>
            Personal projects that I am actively maintaining.
            <br />
            BoosterPax Launch | GH
            <h3>Science Documentaries</h3>
            Melodysheep links
            <h3>Nature</h3>
            Travel photos
        </div>
    );
}

function ContactBlock() {
    return (
        <div className={"max-w-[1000px] mx-auto px-4 mb-12"}>
            <h2>Contact</h2>
            Website: https://191x.com
            <br />
            Timezone: US/East
            <br />
            Email
            <br />
            LinkedIn
            <br />
            Twitter
            <br />
            GitHub
            <br />
        </div>
    );
}

function CopyrightBlock() {
    return (
        <div className={"max-w-[1000px] mx-auto px-4 mb-12"}>
            <h2>Copyright</h2>
            Copyright 2023. 191x.com is the homepage of Andrew Davis. The source code of this website is available under
            the MIT license.
        </div>
    );
}

//
// Render page
//

export default function Page() {
    return (
        <main>
            <HeaderBlock />
            <InfoBlock />
            <TechnicalSkillsBlock />
            <WorkHistoryBlock />
            <InterestsBlock />
            <ContactBlock />
            <CopyrightBlock />
        </main>
    );
}
