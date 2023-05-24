import Image from "next/image";
import { ImageWrap } from "@/components/ImageWrap";

//
// Internal components
//

type SkillIconSize = {
    outer: string;
    icon: string;
    platform: string;
};

type SkillIconIntParams = {
    svgIcon: string;
    svgPlatform: string;
    size: SkillIconSize;
    className?: string;
};

function SkillIcon({ svgIcon, svgPlatform, size, className = "" }: SkillIconIntParams) {
    return (
        <div className={"inline-block relative " + size.outer + " " + className}>
            <ImageWrap
                src={svgIcon}
                width={512}
                height={512}
                alt={"Icon"}
                className={"z-[2] absolute h-auto " + size.icon}
            />
            <ImageWrap
                src={svgPlatform}
                width={163}
                height={85}
                alt={""}
                className={"z-[1] absolute h-auto " + size.platform}
            />
        </div>
    );
}

//
// Exports
//

export type SkillIconParams = {
    size?: "base" | "sm";
    className?: string;
};

export function SkillIconModernWeb({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[9px] top-[8px] w-[48px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[15px] w-[96px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/programming.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconFullstack({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[12px] top-[10px] w-[42px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[22px] w-[84px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/fullstack.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconEnterprise({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[12px] top-[10px] w-[42px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[22px] w-[84px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/enterprise-v2.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconSmartContracts({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[13px] top-[8px] w-[48px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[23px] w-[96px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/smart-contracts.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconSystem({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[11px] top-[10px] w-[42px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[22px] top-[4px] w-[84px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/system-v2.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconDatabase({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[12px] top-[10px] w-[42px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[23px] w-[84px] top-[10px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/database-v2.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconCloud({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[9px] top-[4px] w-[48px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[17px] top-[-5px] w-[96px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/cloud.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconOS({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[9px] top-[8px] w-[48px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[18px] w-[96px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/operating-systems.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconGraphics({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        sm: {
            outer: "mb-4 p-0 min-w-[64px] w-[64px] min-h-[64px] h-[64px]",
            icon: "left-[12px] top-[10px] w-[42px]",
            platform: "absolute top-[30px] w-[64px] drop-shadow-sm",
        },
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[22px] w-[84px]",
            platform: "absolute top-[45px] w-[128px] drop-shadow-md",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/graphics.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}
