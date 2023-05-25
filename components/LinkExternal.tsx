export type LinkExternalParams = {
    text: string;
    href: string;
};

export function LinkExternal({ text, href }: LinkExternalParams) {
    return (
        <>
            <a href={href}>{text}</a>
        </>
    );
}
