import { useState, useCallback, useEffect } from "react";

export function useScreenSize() {

    const { innerWidth } = window
    const [width, setWidth] = useState<number>(innerWidth);

    const updateScreenWidth = useCallback(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', updateScreenWidth);
        return () => {
            window.removeEventListener('resize', updateScreenWidth)
        }
    }, []);

    return { width }

}