import { Injectable } from "@angular/core"


const FAIL_MESSAGE = `
    Desculpa, mas seu poema não pode ser gerado.
    Tente gerar um novo.
`

@Injectable({ providedIn: "root" })
export class Poetry {
    // Manages the Poem caching, to avoid unnecessary requests

    private _poem: string | null = null

    get hasWrote(): boolean {
        return this._poem != null
    }

    get poem(): string | null {
        return this._poem
    }
   
    set poem(poem: string) {
        this._poem = poem
    }

    write(poem: string) {
        this.poem = poem
    }

    erase() {
        this._poem = null
    }

}