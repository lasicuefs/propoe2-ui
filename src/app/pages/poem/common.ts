import { Signal } from "@angular/core"

export const post = async (route: string, body: any) => {
    const PROPOE_API = "localhost:8000"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            // For development purposes
            'Ignore-Certificate-Errors': 'true'
        },
        body: JSON.stringify(body)
    }

    return fetch(`http://${PROPOE_API}/${route}`, options)
}

export const trace = (obj: any, msg: string = "") => {
    console.log(msg, JSON.stringify(obj))
    return obj
}

export const wait = async (signal: Signal<boolean>, timeout: number = 100) => {
    while (!signal()) {
        await new Promise(resolve => setTimeout(resolve, timeout))
    }
}