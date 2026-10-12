type DashboardIconProps = {
    color?: string;
    size?: number;
};

export function DashboardIcon({
    color = "#FEFCFF",
    size = 36,
}: DashboardIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.5 13.464C4.5 6.08214 6.08214 4.5 13.464 4.5H22.536C29.9178 4.5 31.5 6.08214 31.5 13.464V22.536C31.5 29.9178 29.9178 31.5 22.536 31.5H13.464C6.08214 31.5 4.5 29.9178 4.5 22.536V13.464Z"
                stroke={color}
                strokeWidth={1.5}
            />

            <path
                d="M31.5 13.5H4.5"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M13.5 31.5V13.5"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}