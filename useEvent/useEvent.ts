import {useCallback, useLayoutEffect, useRef} from "react";

/**
 * useEvent hook can memoize the callback in ref.current
 * In this case the re-render parent will not affect at this callback
 *
 * @param callback
 */
export const useEvent = <T extends (...ars: any[]) => any>(callback: T) => {
    const ref = useRef(callback);

    useLayoutEffect(() => {
        ref.current = callback;
    }, []);


    return useCallback((...args: Parameters<T>) => {
        return ref.current.apply(null, args)
    }, [ref]);
}