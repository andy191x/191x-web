"use client"; // TODO: optimize this into client/server

import Image from "next/image";
import headerImage from "@/public/images/header.jpg";
import andyImage from "@/public/images/andy.jpg";

//
// Blocks
//

function HeaderBlock() {
    return (
        <div className={"h-[300px] overflow-hidden mb-4"}>
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
                            "absolute left-[16px] top-[100px] w-[180px] h-[180px] z-[1] rounded-full ring-[6px] ring-white ring-opacity-50"
                        }
                        onDragStart={(e) => {
                            e.preventDefault();
                        }}
                    />
                    {/* image block content goes here! */}
                </div>
            </div>
        </div>
    );
}

function InfoBlock() {
    return (
        <div className={"max-w-[1000px] mx-auto px-4"}>
            <h1>Andrew Davis, Software Developer</h1>
            <p>
                Welcome! You&apos;ve landed on my homepage. I&apos;m a highly driven software generalist with 20+ years
                of real world experience. My passion is building and evolving enterprise applications by using
                state-of-the-art technology.
            </p>
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
        </main>
    );
}
