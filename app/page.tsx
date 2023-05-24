"use client"; // TODO: optimize this into client/server

import Image from "next/image";
import { SectionBlock, SectionBlockTransition } from "@/components/SectionBlock";
import { Section } from "@/components/Section";
import {
    ANDREW_EMAIL_URL,
    ANDREW_GITHUB_URL,
    ANDREW_LINKEDIN_URL,
    ANDREW_TWITTER_URL,
    SOURCE_GITHUB_URL,
} from "@/lib/Constants";
import { LinkExternal } from "@/components/LinkExternal";
import { Button } from "@/components/Button";
import {
    SkillIconCloud,
    SkillIconDatabase,
    SkillIconEnterprise,
    SkillIconFullstack,
    SkillIconGraphics,
    SkillIconModernWeb,
    SkillIconOS,
    SkillIconSmartContracts,
    SkillIconSystem,
} from "@/components/SkillIcon";
import {
    andyImage,
    headerImage,
    portfolioImages,
    recommendsGTD,
    recommendsLibraries,
    recommendsMelodysheep,
} from "@/components/StaticImage";
import { Gallery } from "@/components/Gallery";
import { GalleryThumbnail } from "@/components/GalleryThumbnail";

//
// Components
//

function MessageToUser({ children }: { children: React.ReactNode }) {
    return <p className={"font-bold italic mx-0 my-8"}>{children}</p>;
}

type SkillBulletParams = {
    text: string;
};

function SkillBullet({ text }: SkillBulletParams) {
    return (
        <div className={"flex flex-row justify-left items-center"}>
            <div className={"inline-block bg-blue-500 rounded-full mr-2 w-2 h-2 ring-blue-200 ring-4"} />
            <span className={"font-semibold"}>{text}</span>
        </div>
    );
}

type SkillDisplayParams = {
    align: "left" | "right";
    skillNames: string[];
    smallImage: React.ReactNode;
    largeImage: React.ReactNode;
};

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

type TimelineItemParams = {
    align: "left" | "right";
    era: string;
    jobTitle: string;
    jobDesc: string;
    present?: boolean;
};

function TimelineItem({ align, era, jobTitle, jobDesc, present = false }: TimelineItemParams) {
    return (
        <div className={"grid grid-cols-7 gap-0 max-w-[600px] mx-auto"}>
            {align == "left" && <div className={"col-span-3 text-right font-bold text-[#2179A8]"}>{era}</div>}
            {align == "right" && (
                <div className={"col-span-3 text-right"}>
                    <span className={"font-bold"}>{jobTitle}</span>
                    <br />
                    <span className={"text-sm"}>{jobDesc}</span>
                    <div className={"h-20"}></div>
                </div>
            )}
            <div className={"col-span-1"}>
                <div className={"w-[50px] h-[100%] mx-auto relative"}>
                    <div className={"absolute left-[22px] top-[0px] w-[6px] h-[100%] z-[1] bg-blue-100"}></div>
                    <div
                        className={
                            "absolute inline-block z-[2] rounded-full " +
                            (present
                                ? "left-[19px] top-[6px] w-3 h-3 ring-4 bg-pink-600 ring-pink-200 animate-pulse"
                                : "left-[21px] top-[8px] w-2 h-2 ring-4 bg-blue-500 ring-blue-200")
                        }
                    />
                </div>
            </div>
            {align == "left" && (
                <div className={"col-span-3 text-left"}>
                    <span className={"font-bold"}>{jobTitle}</span>
                    <br />
                    <span className={"text-sm"}>{jobDesc}</span>
                    <div className={"h-20"}></div>
                </div>
            )}
            {align == "right" && <div className={"col-span-3 text-left font-bold text-[#2179A8]"}>{era}</div>}
        </div>
    );
}

type TimelineCapParams = {
    direction: "top" | "bottom";
};

function TimelineCap({ direction }: TimelineCapParams) {
    return (
        <div className={"grid grid-cols-7 gap-0 max-w-[600px] mx-auto"}>
            <div className={"col-span-3"}></div>
            <div className={"col-span-1"}>
                <div className={"w-[50px] h-[100%] mx-auto relative"}>
                    <div
                        className={
                            "absolute left-[22px] top-[0px] w-[6px] h-[100%] z-[1] bg-blue-100 " +
                            (direction == "top" ? "rounded-t-full" : "rounded-b-full")
                        }
                    ></div>
                </div>
            </div>
            <div className={"col-span-3"}>
                <div className={"h-10"}></div>
            </div>
        </div>
    );
}

type ContactLinkParams = {
    text: string;
    href: string;
    svgIcon: string;
};

function ContactLink({ text, href, svgIcon }: ContactLinkParams) {
    return (
        <div className={"m-2 sm:m-0"}>
            <a href={href}>
                <Image
                    src={svgIcon}
                    width={512}
                    height={512}
                    alt={"Icon"}
                    className={"inline-block w-[90%] max-w-[72px] h-auto m-4 drop-shadow-lg hover:opacity-50"}
                />
            </a>
            <br />
            <a href={href}>{text}</a>
        </div>
    );
}

//
// Blocks
//

function HeaderBlock() {
    return (
        <div className={"h-[250px] min-w-[380px] overflow-hidden m-0 relative"}>
            <div className={"h-[225px] bg-gradient-to-b from-[#7db5f0] to-[#bbe0fa] relative"}>
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
                            "absolute left-[12px] top-[64px] w-[180px] h-[180px] z-[1] rounded-full ring-[6px] ring-blue-100 ring-opacity-100"
                        }
                        onDragStart={(e) => {
                            e.preventDefault();
                        }}
                    />
                    {/* image block content goes here! */}
                </div>
            </div>
            <div className={"absolute left-[0px] top-[175px] w-[100%] h-[25px] z-[0] bg-blue-300 opacity-90"}></div>
            <div className={"absolute left-[0px] top-[200px] w-[100%] h-[25px] z-[0] bg-blue-200 opacity-95"}></div>
            <div className={"absolute left-[0px] top-[225px] w-[100%] h-[25px] z-[0] bg-blue-100"}></div>
        </div>
    );
}

function InfoBlock() {
    const buttonClasses = "w-[200px] mx-1 my-1";
    return (
        <SectionBlock section={Section.Four} transitionBottom={SectionBlockTransition.FourToTwo}>
            <h1 className={"text-3xl"}>Andrew Davis, Software Developer</h1>
            <MessageToUser>Welcome to my homepage!</MessageToUser>
            <p>
                I am a highly driven software generalist with 20+ years of real world experience. My passion is building
                and evolving enterprise applications by using state-of-the-art technology.
            </p>
            <p className={"mb-10"}>
                This site is a showcase of my professional work and skillsets. For everything else, I&apos;m on{" "}
                <LinkExternal text={"Twitter"} href={ANDREW_TWITTER_URL} />.
            </p>
            <div className={"text-center"}>
                <div className={"inline-block mx-auto"}>
                    <div className={"flex flex-row justify-center items-center font-semibold mb-2"}>
                        <Image
                            src={"/images/hare.svg"}
                            width={512}
                            height={512}
                            alt={"Icon"}
                            className={"w-[64px] h-auto scale-x-[-1]"}
                        />
                        <span className={"mx-4"}>Unconditionally Jump To</span>
                        <Image
                            src={"/images/hare.svg"}
                            width={512}
                            height={512}
                            alt={"Icon"}
                            className={"w-[64px] h-auto"}
                        />
                    </div>
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

function TechnicalSkillsBlock() {
    return (
        <SectionBlock
            section={Section.Two}
            transitionBottom={SectionBlockTransition.TwoToOne}
            title={"Technical Skills"}
        >
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
                    <h3>Full Stack Web</h3>
                    <p className={"mt-2 mb-6"}>Proficient with the traditional full-stack web.</p>
                </div>
                <SkillDisplay
                    align={"right"}
                    skillNames={["Nginx", "Apache", "PHP", "MySQL", "WordPress", "Drupal", "Joomla"]}
                    smallImage={<SkillIconFullstack size={"sm"} />}
                    largeImage={<SkillIconFullstack size={"base"} />}
                />
                <div className={"text-left mt-20"}>
                    <h3>Enterprise Application Design</h3>
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
                    <h3>Smart Contracts</h3>
                    <p className={"mt-2 mb-6"}>Smart contracts for Ethereum and Arbitrum ecosystems.</p>
                </div>
                <SkillDisplay
                    align={"right"}
                    skillNames={["Auditing", "Solidity", "Hardhat", "EVM", "Alchemy", "Infura"]}
                    smallImage={<SkillIconSmartContracts size={"sm"} />}
                    largeImage={<SkillIconSmartContracts size={"base"} />}
                />
                <div className={"text-left mt-20"}>
                    <h3>Systems Level Programming</h3>
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
                    <h3>Cloud Platforms</h3>
                    <p className={"mt-2 mb-6"}>Deployment and automation with the cloud.</p>
                </div>
                <SkillDisplay
                    align={"left"}
                    skillNames={["AWS", "Azure", "CloudFlare", "Digital Ocean", "Vercel", "Vultr"]}
                    smallImage={<SkillIconCloud size={"sm"} />}
                    largeImage={<SkillIconCloud size={"base"} />}
                />
                <div className={"text-right mt-20"}>
                    <h3>Operating Systems</h3>
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
                    <h3>Graphic Design</h3>
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
        <SectionBlock section={Section.One} title={"Work History"} transitionBottom={SectionBlockTransition.OneToThree}>
            <TimelineCap direction={"top"} />
            <TimelineItem
                align={"left"}
                era={"2012 – Present"}
                jobTitle={"Self Employed"}
                jobDesc={"Modern web and EVM smart contracts"}
                present={true}
            />
            <TimelineItem align={"right"} era={"2018 – 2020"} jobTitle={"Vultr"} jobDesc={"Cloud Storage Engineer"} />
            <TimelineItem align={"left"} era={"2016 – 2018"} jobTitle={"Vultr"} jobDesc={"Platform Developer"} />
            <TimelineItem align={"right"} era={"2014 – 2016"} jobTitle={"Vultr"} jobDesc={"Frontend Engineer"} />
            <TimelineItem align={"left"} era={"2010 – 2014"} jobTitle={"GameServers"} jobDesc={"Backend Engineer"} />
            <TimelineItem align={"right"} era={"2006 – 2010"} jobTitle={"GameServers"} jobDesc={"Software Engineer"} />
            <TimelineItem align={"left"} era={"2006 – 2010"} jobTitle={"Delusions"} jobDesc={"Software Contractor"} />
            <TimelineCap direction={"bottom"} />
        </SectionBlock>
    );
}

function ResumeBlock() {
    return (
        <SectionBlock
            section={Section.Three}
            transitionBottom={SectionBlockTransition.ThreeToOne}
            title={"Looking For My Resume/CV?"}
        >
            <div className={"text-center"}>
                <Button text={"Download Resume"} className={"mt-5"} section={Section.Three} />
            </div>
        </SectionBlock>
    );
}

function PortfolioBlock() {
    return (
        <SectionBlock
            section={Section.One}
            transitionBottom={SectionBlockTransition.OneToTwo}
            title={"Visual Portfolio"}
        >
            <p>Screen captures from my past projects.</p>
            <Gallery>
                {portfolioImages.map((image, i) => {
                    return <GalleryThumbnail key={i} thumb={image.thumb} full={image.full} desc={image.desc} />;
                })}
            </Gallery>
        </SectionBlock>
    );
}

function RecommendationsBlock() {
    return (
        <SectionBlock
            section={Section.Two}
            transitionBottom={SectionBlockTransition.TwoToFour}
            title={"Recommendations"}
        >
            <MessageToUser>
                Still here? Awesome! I have some fun recommendations from around the internet that you might enjoy.
                <br />
                <br />
                These are tailored for all ages and backgrounds.
            </MessageToUser>

            <h3>Melodysheep</h3>
            <div className="sm:grid sm:grid-cols-2">
                <div>
                    <p>
                        An artist that produces documentaries based on our current understanding of life science,
                        physics, and cosmology. The music and visuals in his videos are a masterpiece.
                    </p>
                </div>
                <div className={"text-center"}>
                    <GalleryThumbnail full={"https://www.youtube.com/@melodysheep"} thumb={recommendsMelodysheep} />
                    <br />
                    <span className={"text-xs"}>
                        <a href={"https://www.youtube.com/@melodysheep"}>View on YouTube</a>
                    </span>
                </div>
            </div>

            <h3>Libraries of the World</h3>
            <div className="sm:grid sm:grid-cols-2">
                <div>
                    <p>Here&apos;s a collection of 30 awe-inspiring libraries from around the world.</p>
                </div>
                <div className={"text-center"}>
                    <GalleryThumbnail
                        full={"https://twitter.com/AlexAndBooks_/status/1549052938168909826"}
                        thumb={recommendsLibraries}
                    />
                    <br />
                    <span className={"text-xs"}>
                        <a href={"https://twitter.com/AlexAndBooks_/status/1549052938168909826"}>View on Twitter</a>
                    </span>
                </div>
            </div>

            <h3>Getting Things Done</h3>
            <div className="sm:grid sm:grid-cols-2">
                <div>
                    <p>
                        One of those popular &quot;best seller / productivity&quot; books. I&apos;ve read a number of
                        these over the years, but David Allen&apos;s book stands out from the crowd. The methods
                        described in his book are helpful towards saving time when solving everyday problems.
                    </p>
                </div>
                <div className={"text-center"}>
                    <GalleryThumbnail
                        full={"https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563/"}
                        thumb={recommendsGTD}
                    />
                    <br />
                    <span className={"text-xs"}>
                        <a href={"https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563/"}>
                            View on Amazon
                        </a>
                    </span>
                </div>
            </div>
        </SectionBlock>
    );
}

function ContactBlock() {
    return (
        <SectionBlock section={Section.Four} title={"Contact"}>
            <div className="sm:grid sm:grid-cols-4 text-center max-w-[640px] mx-auto">
                <ContactLink text={"Email"} href={ANDREW_EMAIL_URL} svgIcon={"/images/contact/email.svg"} />
                <ContactLink text={"LinkedIn"} href={ANDREW_LINKEDIN_URL} svgIcon={"/images/contact/linkedin.svg"} />
                <ContactLink text={"Twitter"} href={ANDREW_TWITTER_URL} svgIcon={"/images/contact/twitter.svg"} />
                <ContactLink text={"GitHub"} href={ANDREW_GITHUB_URL} svgIcon={"/images/contact/github.svg"} />
            </div>
        </SectionBlock>
    );
}

function CopyrightBlock() {
    const year = new Date().getUTCFullYear();
    return (
        <SectionBlock section={Section.Three} transitionTop={SectionBlockTransition.ToFooter}>
            <div className={"text-right"}>
                <strong>Copyright Andrew Davis ©{year}</strong>
                <br />
                <br />
                The source code of this website is available on <a href={SOURCE_GITHUB_URL}>GitHub</a>.
            </div>
        </SectionBlock>
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
            <ResumeBlock />
            <PortfolioBlock />
            <RecommendationsBlock />
            <ContactBlock />
            <CopyrightBlock />
        </main>
    );
}
