/* eslint-disable no-unused-vars */
import { Section } from "@/components/Section";

export type SectionBlockParams = {
    section: Section;
    title?: string;
    id?: string;
    children?: any;
};

export function SectionBlock({ section, title = "", id = undefined, children }: SectionBlockParams) {
    return (
        <>
            {section == Section.One && (
                <>
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
                </>
            )}
            {section == Section.Two && (
                <>
                    <div className={"h-[25px] bg-gray-50"}></div>
                    <div className={"h-[45px] bg-blue-50"}></div>
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
                    <div className={"h-[45px] bg-blue-50"}></div>
                    <div className={"h-[25px] bg-gray-50"}></div>
                </>
            )}
            {section == Section.Three && (
                <>
                    <div className={"h-[25px] bg-gray-50"}></div>
                    <div className={"h-[15px] bg-[#e6f5f3]"}></div>
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
                    <div className={"h-[40px] bg-[#e6f5f3]"}></div>
                    <div className={"h-[20px] bg-gray-50"}></div>
                </>
            )}
        </>
    );
}
