

export class Session {
    // sessionStorage's wrapper, since AngularJS can't find it, 
    // raising: ``ERROR ReferenceError: sessionStorage is not defined``.
    //
    // The code repetition here is to avoid the compiler to show reference errors. 

    static fetch(key: string): string | null {
        if (typeof(sessionStorage) !== "undefined") {
            return sessionStorage.getItem(key)
        } else {
            return null
        }
    }

    static save(key: string, value: string): void {
        if (typeof(sessionStorage) !== "undefined") {
            sessionStorage.setItem(key, value)
        }
    }

    static delete(key: string): void {
        if (typeof(sessionStorage) !== "undefined") {
            sessionStorage.removeItem(key)
        }
    }
}