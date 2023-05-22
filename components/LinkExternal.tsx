export interface LinkExternalParams {
    text: string;
    href: string;
}

export function LinkExternal({ text, href }: LinkExternalParams) {
    // TODO: external icon <FontAwesomeIcon className={"mr-1 text-xs"} icon={faArrowUpRightFromSquare} />
    return (
        <>
            <a href={href}>{text}</a>
        </>
    );
}
