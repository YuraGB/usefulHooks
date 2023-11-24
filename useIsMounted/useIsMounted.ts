import {useEffect, useRef} from "react";

/**
 * useIsMounted is the hook that can track async actions
 * For ex.:
 *  in component -> in useEffect :
 *  fetch(...)
 *      .then(...)
 *      .then(resp => {
 *          if(!isMounted.current) {
 *              return
 *          }
 *          setState(resp)
 *      })
 *
 */
export function useIsMounted() {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return isMounted;
}