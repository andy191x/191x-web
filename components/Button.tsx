import { Section } from "@/components/Section";

export type ButtonParams = {
    text: string;
    className?: string;
    onClick?: any;
    section?: Section;
};

export function Button({ text, className = "", onClick = undefined, section = Section.One }: ButtonParams) {
    return (
        <>
            {section == Section.Three && (
                <button
                    className={
                        "bg-white hover:bg-green-100 hover:ring-1 hover:ring-green-500 hover:cursor-pointer py-2 px-6 rounded-lg font-semibold text-sm shadow " +
                        className
                    }
                    onClick={onClick}
                >
                    {text}
                </button>
            )}
            {/* Default button */}
            {section != Section.Three && (
                <button
                    className={
                        "bg-white hover:bg-blue-100 hover:ring-1 hover:ring-blue-500 hover:cursor-pointer py-2 px-6 rounded-lg font-semibold text-sm shadow " +
                        className
                    }
                    onClick={onClick}
                >
                    {text}
                </button>
            )}
        </>
    );
}
