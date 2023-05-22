export interface ButtonParams {
    text: string;
    className?: string;
    onClick?: any;
}

export function Button({ text, className = "", onClick = undefined }: ButtonParams) {
    return (
        <>
            <button
                className={
                    "bg-white hover:bg-blue-100 hover:ring-1 hover:ring-blue-500 hover:cursor-pointer py-2 px-6 rounded-lg font-semibold text-sm shadow " +
                    className
                }
                onClick={onClick}
            >
                {text}
            </button>
        </>
    );
}
