import { useEffect, useRef } from "react"

export const useOnReachEnd = (callback: () => void, isEnabled = true) => {
    const ref = useRef<HTMLTableRowElement>(null)

    console.log("On reach end", isEnabled)

    useEffect(() => {
        if (!isEnabled || !ref.current) return

        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && callback(),
            { rootMargin: "200px" }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [callback, isEnabled])

    return ref
}