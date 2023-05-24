import { Section } from "@/components/Section";
import { MutableRefObject, useEffect, useRef } from "react";
import { usePrevious } from "@/lib/hooks/usePrevious";

//
// Export types
//

export enum SectionBlockTransition {
    None,
    OneToTwo,
    TwoToOne,
    TwoToFour,
    OneToThree,
    ThreeToOne,
    FourToTwo,
    ToFooter,
}

export type SectionBlockParams = {
    section: Section;
    transitionTop?: SectionBlockTransition;
    transitionBottom?: SectionBlockTransition;
    title?: string;
    scroll?: number;
    children?: any;
};

//
// Internal components
//

type TransitionBlockParams = {
    transition: SectionBlockTransition;
};

function TransitionBlock({ transition }: TransitionBlockParams) {
    if (transition == SectionBlockTransition.OneToTwo || transition == SectionBlockTransition.FourToTwo) {
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
    } else if (transition == SectionBlockTransition.TwoToFour) {
        return (
            <>
                <div className={"h-[15px] bg-blue-50"}></div>
                <div className={"h-[20px] bg-gray-100"}></div>
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
    } else if (transition == SectionBlockTransition.ToFooter) {
        return (
            <>
                <div className={"h-[32px] bg-gray-100"}></div>
                <div className={"h-[48px] bg-[#e6f5f3]"}></div>
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
    scroll = 0,
    children,
}: SectionBlockParams) {
    const ref = useRef(null) as MutableRefObject<HTMLInputElement | null>;
    const prevScroll = usePrevious(scroll);

    useEffect(() => {
        const stateChanged = prevScroll != undefined && scroll > 0 && scroll != prevScroll;
        if (stateChanged) {
            ref.current?.scrollIntoView({ behavior: "smooth" });
        }
    });

    return (
        <>
            {section == Section.One && (
                <>
                    <TransitionBlock transition={transitionTop} />
                    <div
                        ref={ref}
                        className={"min-w-[380px] px-6 py-6 font-sans text-[#2c2c2c] bg-white"}
                        style={{
                            /* Next.js does not yet support repeat with Image */
                            backgroundImage: "url(/images/texture1.png)",
                            backgroundRepeat: "repeat",
                            backgroundSize: "256px 256px",
                        }}
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
                        ref={ref}
                        className={
                            "min-w-[380px] px-6 py-6 font-sans text-[#2c2c2c] bg-blue-100 bg-gradient-to-r from-blue-100 to-white"
                        }
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
                    <div ref={ref} className={"min-w-[380px] px-12 py-12 font-sans text-[#2c2c2c] bg-[#d9f2ee]"}>
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
            {section == Section.Four && (
                <>
                    <TransitionBlock transition={transitionTop} />
                    <div ref={ref} className={"min-w-[380px] px-6 py-6 font-sans text-[#2c2c2c] bg-[#f9f9f9]"}>
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
