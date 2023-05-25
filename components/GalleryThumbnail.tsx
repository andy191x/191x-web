import { StaticImageData } from "next/image";
import { ImageWrap } from "@/components/ImageWrap";

export type GalleryThumbnailParams = {
    full: string;
    thumb: StaticImageData;
    desc?: string;
};

export function GalleryThumbnail({ full, thumb, desc = "" }: GalleryThumbnailParams) {
    const size = "w-[192px] h-[138px]";
    return (
        <a
            href={full}
            className={
                "inline-block relative " +
                size +
                " rounded-lg mx-2 my-2 overflow-hidden hover:ring-1 hover:ring-blue-500 drop-shadow cursor-pointer"
            }
            aria-label={desc}
        >
            <div className={"absolute left-0 top-0 z-[1] " + size + " bg-blue-500"} />
            <ImageWrap src={thumb} alt={desc} className={"absolute left-0 top-0 z-[2] " + size + " hover:opacity-50"} />
        </a>
    );
}
