export function throttle<T>(cb: (...args : T[]) => any, delay: number = 1000) {
    let shouldWait: boolean = false
    let waitingArgs: T[]
    const timeoutFunc = (): void => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }

    return (...args: T[]): void => {
        if (shouldWait) {
            waitingArgs = args
            return
        }

        cb(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}