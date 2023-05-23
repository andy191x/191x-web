import { ReactNode } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { LIGHTGALLERY_KEY } from "@/lib/Constants";

export type GalleryParams = {
    children: ReactNode;
};

export function Gallery({ children }: GalleryParams) {
    return (
        <>
            <div className={"text-center"}>
                <LightGallery
                    licenseKey={LIGHTGALLERY_KEY}
                    speed={300}
                    mode={"lg-fade"}
                    download={false}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {children}
                </LightGallery>
            </div>
        </>
    );
}
