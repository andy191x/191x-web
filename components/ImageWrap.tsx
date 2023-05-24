import Image, { ImageProps } from "next/image";
import { objectHasKey } from "@/lib/Utils";

//
// Application-wide image wrapper
// - Disables dragging and selection on all images by default
//

export function ImageWrap({ src, alt, ...props }: ImageProps) {
    let className = "select-none";
    let childProps = { ...props };

    if (objectHasKey(childProps, "className")) {
        className += " " + childProps.className;
        delete childProps.className;
    }

    return (
        <Image
            src={src}
            alt={alt}
            className={className}
            onDragStart={(e) => {
                e.preventDefault();
            }}
            {...childProps}
        />
    );
}
