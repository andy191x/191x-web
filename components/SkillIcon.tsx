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
    size?: "base";
    className?: string;
};

export function SkillIconModernWeb({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[15px] w-[96px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
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
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[22px] w-[84px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
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
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[22px] w-[84px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
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
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[23px] w-[96px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
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
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[22px] top-[4px] w-[84px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
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
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[23px] w-[84px] top-[10px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
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
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[17px] top-[-5px] w-[96px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
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
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[21px] w-[88px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
        },
    };

    return (
        <SkillIcon
            svgIcon={"/images/skills/operating-systems-v2.svg"}
            svgPlatform={"/images/skills/platform-grey.svg"}
            size={sizes[size]}
            className={className}
        />
    );
}

export function SkillIconGraphics({ size = "base", className = "" }: SkillIconParams) {
    const sizes = {
        base: {
            outer: "m-0 p-0 min-w-[128px] w-[128px] min-h-[128px] h-[128px]",
            icon: "left-[22px] w-[84px] drop-shadow",
            platform: "absolute top-[45px] w-[128px] drop-shadow",
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
