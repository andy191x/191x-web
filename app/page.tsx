"use client"; // TODO: optimize this into client/server

import Image from "next/image";
import headerImage from "@/public/images/header.jpg";
import andyImage from "@/public/images/andy.jpg";
import { SectionBlock } from "@/components/SectionBlock";
import { Section } from "@/components/Section";
import { ANDREW_TWITTER_URL } from "@/lib/Constants";
import { LinkExternal } from "@/components/LinkExternal";
import { Button } from "@/components/Button";

//
// Blocks
//

function HeaderBlock() {
    return (
        <div className={"h-[275px] overflow-hidden m-0 relative"}>
            <div className={"h-[200px] bg-gradient-to-b from-[#7db5f0] to-[#bbe0fa] relative"}>
                <Image
                    src={headerImage}
                    alt={""}
                    className={"absolute left-[0px] top-[0px] w-[100%] h-[100%] z-[0]"}
                    style={{ objectFit: "cover" }}
                    quality={100}
                    onDragStart={(e) => {
                        e.preventDefault();
                    }}
                />
                <div className={"max-w-[1000px] mx-auto relative z-[1]"}>
                    <Image
                        src={andyImage}
                        alt={"Andrew Davis"}
                        title={"Andrew"}
                        className={
                            "absolute left-[8px] top-[89px] w-[180px] h-[180px] z-[1] rounded-full ring-[6px] ring-blue-100 ring-opacity-100"
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
    const buttonClasses = "w-[200px] mx-1 my-1";
    return (
        <SectionBlock section={Section.One}>
            <h1 className={"text-3xl"}>Andrew Davis, Software Developer</h1>
            <p>
                I am a highly driven software generalist with 20+ years of real world experience. My passion is building
                and evolving enterprise applications by using state-of-the-art technology.
            </p>
            <p>
                This site is a showcase of my professional work and skillsets. For everything else, I’m on{" "}
                <LinkExternal text={"Twitter"} href={ANDREW_TWITTER_URL} />.
            </p>
            <div className={"max-w-[500px] mx-auto text-center"}>
                <span className={"inline-block font-semibold mb-2"}>Jump to Section</span>
                <div className={"bg-[#eee] p-4 rounded-lg"}>
                    <Button text={"Technical Skills"} className={buttonClasses} />
                    <Button text={"Work History"} className={buttonClasses} />
                    <br />
                    <Button text={"Resume/CV"} className={buttonClasses} />
                    <Button text={"Contact"} className={buttonClasses} />
                </div>
            </div>
        </SectionBlock>
    );
}

interface SkillBulletParams {
    text: string;
}

function SkillBullet({ text }: SkillBulletParams) {
    return (
        <div className={"flex flex-row justify-left items-center"}>
            <div className={"inline-block bg-blue-500 rounded-full mr-2 w-2 h-2 ring-blue-200 ring-4"} />
            <span className={"font-semibold"}>{text}</span>
        </div>
    );
}

function TechnicalSkillsBlock() {
    return (
        <SectionBlock section={Section.Two} title={"Technical Skills"}>
            <p>My career has taken me to many different domains within computer science. More specifically...</p>
            <div className={"text-left"}>
                <h3>Modern Web</h3>
                <p className={"mt-2 mb-6"}>Building using industry standard web technologies.</p>
            </div>
            <div className={"max-w-[800px] mx-auto text-left"}>
                <div className={"bg-white p-4 rounded-lg"}>
                    <div className="grid grid-cols-3 gap-4">
                        <div className={"col-span-2"}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <SkillBullet text={"JavaScript"} />
                                <SkillBullet text={"TypeScript"} />
                                <SkillBullet text={"NodeJS"} />
                                <SkillBullet text={"React"} />
                                <SkillBullet text={"HTML5"} />
                                <SkillBullet text={"CSS"} />
                                <SkillBullet text={"Tailwind"} />
                                <SkillBullet text={"Styled"} />
                            </div>
                        </div>
                        <div className={"flex flex-row justify-center items-center"}>graphic</div>
                    </div>
                </div>
            </div>
        </SectionBlock>
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
