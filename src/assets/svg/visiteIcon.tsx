type VisiteIconProps = {
    color?: string;
    size?: number;
};

export function VisiteIcon({
    color = "white",
    size = 36,
}: VisiteIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3 18C3 12.3431 3 9.51472 4.75736 7.75735C6.51473 6 9.34314 6 15 6H21C26.6568 6 29.4853 6 31.2426 7.75735C33 9.51472 33 12.3431 33 18V21C33 26.6568 33 29.4853 31.2426 31.2426C29.4853 33 26.6568 33 21 33H15C9.34314 33 6.51473 33 4.75736 31.2426C3 29.4853 3 26.6568 3 21V18Z"
                stroke={color}
                strokeWidth={1.5}
            />

            <path
                d="M10.5 6V3.75"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />

            <path
                d="M25.5 6V3.75"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />

            <path
                d="M24.75 27C25.9926 27 27 25.9926 27 24.75C27 23.5074 25.9926 22.5 24.75 22.5C23.5074 22.5 22.5 23.5074 22.5 24.75C22.5 25.9926 23.5074 27 24.75 27Z"
                stroke={color}
                strokeWidth={1.5}
            />

            <path
                d="M3.75 13.5H32.25"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </svg>
    );
}