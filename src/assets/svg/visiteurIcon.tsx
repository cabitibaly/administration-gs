type VisiteurIconProps = {
    color?: string;
    size?: number;
};

export function VisiteurIcon({
    color = "white",
    size = 36,
}: VisiteurIconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18 15C21.3137 15 24 12.3137 24 9C24 5.68629 21.3137 3 18 3C14.6863 3 12 5.68629 12 9C12 12.3137 14.6863 15 18 15Z"
                stroke={color}
                strokeWidth={1.5}
            />

            <path
                opacity={0.5}
                d="M27 13.5C29.4854 13.5 31.5 11.8211 31.5 9.75C31.5 7.67893 29.4854 6 27 6"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />

            <path
                opacity={0.5}
                d="M9 13.5C6.51473 13.5 4.5 11.8211 4.5 9.75C4.5 7.67893 6.51473 6 9 6"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />

            <path
                d="M18 31.5C22.9706 31.5 27 28.8137 27 25.5C27 22.1863 22.9706 19.5 18 19.5C13.0294 19.5 9 22.1863 9 25.5C9 28.8137 13.0294 31.5 18 31.5Z"
                stroke={color}
                strokeWidth={1.5}
            />

            <path
                opacity={0.5}
                d="M30 28.5C32.6313 27.9229 34.5 26.4617 34.5 24.75C34.5 23.0383 32.6313 21.5771 30 21"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />

            <path
                opacity={0.5}
                d="M6 28.5C3.36862 27.9229 1.5 26.4617 1.5 24.75C1.5 23.0383 3.36862 21.5771 6 21"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </svg>
    );
}