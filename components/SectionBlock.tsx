/* eslint-disable no-unused-vars */
import { Section } from "@/components/Section";
import { Property } from "csstype";
import Transition = Property.Transition;

//
// Export types
//

export enum SectionBlockTransition {
    None = 0,
    OneToTwo = 1,
    TwoToOne = 2,
    OneToThree = 3,
    ThreeToOne = 4,
}

export type SectionBlockParams = {
    section: Section;
    transitionTop?: SectionBlockTransition;
    transitionBottom?: SectionBlockTransition;
    title?: string;
    id?: string;
    children?: any;
};

//
// Internal components
//

type TransitionBlockParams = {
    transition: SectionBlockTransition;
};

function TransitionBlock({ transition }: TransitionBlockParams) {
    if (transition == SectionBlockTransition.OneToTwo) {
        return (
            <>
                <div className={"h-[25px] bg-gray-50"}></div>
                <div className={"h-[45px] bg-blue-50"}></div>
            </>
        );
    } else if (transition == SectionBlockTransition.TwoToOne) {
        return (
            <>
                <div className={"h-[45px] bg-blue-50"}></div>
                <div className={"h-[25px] bg-gray-50"}></div>
            </>
        );
    } else if (transition == SectionBlockTransition.OneToThree) {
        return (
            <>
                <div className={"h-[25px] bg-gray-50"}></div>
                <div className={"h-[15px] bg-[#e6f5f3]"}></div>
            </>
        );
    } else if (transition == SectionBlockTransition.ThreeToOne) {
        return (
            <>
                <div className={"h-[40px] bg-[#e6f5f3]"}></div>
                <div className={"h-[20px] bg-gray-50"}></div>
            </>
        );
    }

    return null;
}

//
// Export components
//

export function SectionBlock({
    section,
    transitionTop = SectionBlockTransition.None,
    transitionBottom = SectionBlockTransition.None,
    title = "",
    id = undefined,
    children,
}: SectionBlockParams) {
    return (
        <>
            {section == Section.One && (
                <>
                    <TransitionBlock transition={transitionTop} />
                    <div
                        className={"min-w-[380px] px-6 pt-4 pb-8 font-sans text-[#2c2c2c] bg-white"}
                        style={{
                            /* Next.js does not yet support repeat with Image */
                            backgroundImage: "url(/images/texture1.png)",
                            backgroundRepeat: "repeat",
                            backgroundSize: "256px 256px",
                        }}
                        id={id}
                    >
                        <div className={"max-w-[1000px] mx-auto relative"}>
                            {title.length > 0 && (
                                <>
                                    <h2>{title}</h2>
                                </>
                            )}
                            {children}
                        </div>
                    </div>
                    <TransitionBlock transition={transitionBottom} />
                </>
            )}
            {section == Section.Two && (
                <>
                    <TransitionBlock transition={transitionTop} />
                    <div
                        className={
                            "min-w-[380px] px-6 pt-6 pb-16 font-sans text-[#2c2c2c] bg-blue-100 bg-gradient-to-r from-blue-100 to-white"
                        }
                        id={id}
                    >
                        <div className={"max-w-[1000px] mx-auto relative"}>
                            {title.length > 0 && (
                                <>
                                    <h2>{title}</h2>
                                </>
                            )}
                            {children}
                        </div>
                    </div>
                    <TransitionBlock transition={transitionBottom} />
                </>
            )}
            {section == Section.Three && (
                <>
                    <TransitionBlock transition={transitionTop} />
                    <div className={"min-w-[380px] px-6 pt-6 pb-16 font-sans text-[#2c2c2c] bg-[#d9f2ee]"} id={id}>
                        <div className={"max-w-[1000px] mx-auto relative"}>
                            {title.length > 0 && (
                                <>
                                    <h2 className={"text-center"}>{title}</h2>
                                </>
                            )}
                            {children}
                        </div>
                    </div>
                    <TransitionBlock transition={transitionBottom} />
                </>
            )}
        </>
    );
}
