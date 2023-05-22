/* eslint-disable no-unused-vars */
import { Section } from "@/components/Section";

export interface SectionBlockParams {
    section: Section;
    title?: string;
    id?: string;
    children?: any;
}

export function SectionBlock({ section, title = "", id = undefined, children }: SectionBlockParams) {
    return (
        <>
            {section == Section.One && (
                <>
                    <div
                        className={"px-6 pt-4 pb-8 font-sans text-[#2c2c2c] bg-white"}
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
                    <div className={"px-6 pt-4 pb-8 font-sans text-[#2c2c2c] bg-blue-100"} id={id}>
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
        </>
    );
}
