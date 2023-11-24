import { useEffect, useRef } from "react";

/**
 * usePrevious can track prev state or  props
 *
 * @param value
 */
export function usePrevious<T>(value: T) {
    // first render will be null
    // next re-render will have previous
    const prevValue = useRef<T | null>(null);

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    return prevValue;
}