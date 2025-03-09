import { Injectable } from "@angular/core"


const FAIL_MESSAGE = `
    Desculpa, mas seu poema não pode ser gerado.
    Tente gerar um novo.
`

@Injectable({ providedIn: "root" })
export class Poetry {
    // Manages the Poem caching, to avoid unnecessary requests

    private _poem: string = ""

    get hasWrote(): boolean {
        return this._poem != ""
    }

    get poem(): string {
        return this.hasWrote? this._poem : FAIL_MESSAGE
    }
   
    set poem(poem: string) {
        this._poem = poem
    }

    write(poem: string) {
        this.poem = poem
    }

    erase() {
        this._poem = ""
    }

}