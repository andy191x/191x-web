"use client"; // TODO: optimize this into client/server

import Image from "next/image";
import headerImage from "@/public/images/header.jpg";
import andyImage from "@/public/images/andy.jpg";
import { SectionBlock } from "@/components/SectionBlock";
import { Section } from "@/components/Section";
import { ANDREW_TWITTER_URL } from "@/lib/Constants";
import { LinkExternal } from "@/components/LinkExternal";
import { Button } from "@/components/Button";
import {
    SkillIconCloud,
    SkillIconDatabase,
    SkillIconEnterprise,
    SkillIconFullstack,
    SkillIconModernWeb,
    SkillIconSmartContracts,
    SkillIconSystem,
    SkillIconOS,
    SkillIconGraphics,
} from "@/components/SkillIcon";

//
// Blocks
//

function HeaderBlock() {
    return (
        <div className={"h-[275px] min-w-[380px] overflow-hidden m-0 relative"}>
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
            <div className={"text-center mb-6"}>
                <div className={"inline-block mx-auto"}>
                    <span className={"inline-block font-semibold mb-2"}>Jump to Section</span>
                    <div className={"bg-opacity-50 bg-gray-200 p-1 rounded-lg"}>
                        <Button text={"Technical Skills"} className={buttonClasses} />
                        <Button text={"Work History"} className={buttonClasses} />
                        <br />
                        <Button text={"Resume/CV"} className={buttonClasses} />
                        <Button text={"Contact"} className={buttonClasses} />
                    </div>
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

interface SkillDisplayParams {
    align: "left" | "right";
    skillNames: string[];
    smallImage: React.ReactNode;
    largeImage: React.ReactNode;
}

function SkillDisplay({ align, skillNames, smallImage, largeImage }: SkillDisplayParams) {
    return (
        <>
            {/* Small configuration */}
            {align == "left" && (
                <div className={"text-left bg-white bg-opacity-80 rounded-lg overflow-hidden"}>
                    <div className="grid grid-cols-2 gap-8 py-4 px-6 sm:hidden">
                        <div>
                            <div className="grid grid-cols-1 gap-2">
                                {skillNames.map((skillName, index) => {
                                    return <SkillBullet key={index} text={skillName} />;
                                })}
                            </div>
                        </div>
                        <div className={"flex flex-row justify-center items-center overflow-hidden"}>{largeImage}</div>
                    </div>
                </div>
            )}
            {align == "right" && (
                <div className={"text-left bg-white bg-opacity-80 rounded-lg overflow-hidden"}>
                    <div className="grid grid-cols-2 gap-8 py-4 px-6 sm:hidden">
                        <div className={"flex flex-row justify-center items-center overflow-hidden"}>{largeImage}</div>
                        <div>
                            <div className="grid grid-cols-1 gap-2">
                                {skillNames.map((skillName, index) => {
                                    return <SkillBullet key={index} text={skillName} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Medium+ configuration */}
            {align == "left" && (
                <div className={"text-left bg-white bg-opacity-80 rounded-lg overflow-hidden"}>
                    <div className="hidden sm:grid sm:grid-cols-3 sm:gap-4 py-4 px-6">
                        <div className={"col-span-2 flex flex-row justify-left items-center"}>
                            <div className="grow grid grid-cols-2 gap-4">
                                {skillNames.map((skillName, index) => {
                                    return <SkillBullet key={index} text={skillName} />;
                                })}
                            </div>
                        </div>
                        <div className={"flex flex-row justify-center items-center overflow-hidden"}>{largeImage}</div>
                    </div>
                </div>
            )}
            {align == "right" && (
                <div className={"text-left bg-white bg-opacity-80 rounded-lg overflow-hidden"}>
                    <div className="hidden sm:grid sm:grid-cols-3 sm:gap-4 py-4 px-6">
                        <div className={"flex flex-row justify-center items-center overflow-hidden"}>{largeImage}</div>
                        <div className={"col-span-2 flex flex-row justify-left items-center"}>
                            <div className="grow grid grid-cols-2 gap-4">
                                {skillNames.map((skillName, index) => {
                                    return <SkillBullet key={index} text={skillName} />;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

function TechnicalSkillsBlock() {
    return (
        <SectionBlock section={Section.Two} title={"Technical Skills"}>
            <p>My career has taken me to many different domains within computer science. More specifically -</p>
            <div>
                <div className={"text-left mt-10"}>
                    <h3>Modern Web</h3>
                    <p className={"mt-2 mb-6"}>Building using industry standard web technologies.</p>
                </div>
                <SkillDisplay
                    align={"left"}
                    skillNames={["JavaScript", "TypeScript", "NodeJS", "React", "HTML5", "CSS", "Tailwind", "Styled"]}
                    smallImage={<SkillIconModernWeb size={"sm"} />}
                    largeImage={<SkillIconModernWeb size={"base"} />}
                />
                <div className={"text-right mt-20"}>
                    <h3>Full stack web</h3>
                    <p className={"mt-2 mb-6"}>Proficient with the traditional full-stack web.</p>
                </div>
                <SkillDisplay
                    align={"right"}
                    skillNames={["Nginx", "Apache", "PHP", "MySQL", "WordPress", "Drupal", "Joomla"]}
                    smallImage={<SkillIconFullstack size={"sm"} />}
                    largeImage={<SkillIconFullstack size={"base"} />}
                />
                <div className={"text-left mt-20"}>
                    <h3>Enterprise application design</h3>
                    <p className={"mt-2 mb-6"}>
                        Experienced with designing and troubleshooting enterprise applications.
                    </p>
                </div>
                <SkillDisplay
                    align={"left"}
                    skillNames={[
                        "Algorithm analysis",
                        "Application security",
                        "Best practices",
                        "Hardware",
                        "Networking",
                        "Project management",
                        "QA",
                        "Scaling",
                    ]}
                    smallImage={<SkillIconEnterprise size={"sm"} />}
                    largeImage={<SkillIconEnterprise size={"base"} />}
                />
                <div className={"text-right mt-20"}>
                    <h3>Smart contracts</h3>
                    <p className={"mt-2 mb-6"}>Smart contracts for Ethereum and Arbitrum ecosystems.</p>
                </div>
                <SkillDisplay
                    align={"right"}
                    skillNames={["Auditing", "Solidity", "Hardhat", "EVM", "Alchemy", "Infura"]}
                    smallImage={<SkillIconSmartContracts size={"sm"} />}
                    largeImage={<SkillIconSmartContracts size={"base"} />}
                />
                <div className={"text-left mt-20"}>
                    <h3>System level programming</h3>
                    <p className={"mt-2 mb-6"}>Desktop applications, CLI, game development, and system daemons.</p>
                </div>
                <SkillDisplay
                    align={"left"}
                    skillNames={["C/C++", "C#", "Java", "Python", "Shell", "Unity"]}
                    smallImage={<SkillIconSystem size={"sm"} />}
                    largeImage={<SkillIconSystem size={"base"} />}
                />
                <div className={"text-right mt-20"}>
                    <h3>Databases</h3>
                    <p className={"mt-2 mb-6"}>Application-level and limited DBA experience with databases.</p>
                </div>
                <SkillDisplay
                    align={"right"}
                    skillNames={["MongoDB", "MySQL", "PostgreSQL", "Redis", "SQLite"]}
                    smallImage={<SkillIconDatabase size={"sm"} />}
                    largeImage={<SkillIconDatabase size={"base"} />}
                />
                <div className={"text-left mt-20"}>
                    <h3>Cloud platforms</h3>
                    <p className={"mt-2 mb-6"}>Deployment and automation with the cloud.</p>
                </div>
                <SkillDisplay
                    align={"left"}
                    skillNames={["AWS", "Azure", "CloudFlare", "Digital Ocean", "Vercel", "Vultr"]}
                    smallImage={<SkillIconCloud size={"sm"} />}
                    largeImage={<SkillIconCloud size={"base"} />}
                />
                <div className={"text-right mt-20"}>
                    <h3>Operating systems</h3>
                    <p className={"mt-2 mb-6"}>Familiar with many different desktop and server operating systems.</p>
                </div>
                <SkillDisplay
                    align={"right"}
                    skillNames={[
                        "Android",
                        "BSD (FreeBSD)",
                        "BSD (OpenBSD)",
                        "Linux (Ubuntu)",
                        "Linux (Debian)",
                        "MacOS",
                        "iOS",
                        "Virtualization",
                        "Windows",
                        "Windows Server",
                    ]}
                    smallImage={<SkillIconOS size={"sm"} />}
                    largeImage={<SkillIconOS size={"base"} />}
                />
                <div className={"text-left mt-20"}>
                    <h3>Graphic design</h3>
                    <p className={"mt-2 mb-6"}>Capable of graphic design and digital artwork.</p>
                </div>
                <SkillDisplay
                    align={"left"}
                    skillNames={["After Effects", "Cinema4D", "Figma", "Illustrator", "Inkscape", "Photoshop"]}
                    smallImage={<SkillIconGraphics size={"sm"} />}
                    largeImage={<SkillIconGraphics size={"base"} />}
                />
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
