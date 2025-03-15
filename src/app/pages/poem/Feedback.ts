import { Component, input, model } from "@angular/core"
import { post, trace } from "./common"

@Component({
    selector: "feedback",
    standalone: true,
    imports: [],
    template: `
        @let star = "⭐";

        <section class="z-50 fixed top-0 left-0 w-screen h-screen backdrop-blur-xl flex items-center justify-center">
            <form class="bg-slate-100 p-6 rounded-xl shadow-xl flex flex-col gap-4">
                
                <!-- Rating Stars -->
                <div class="rating flex flex-row-reverse justify-center gap-2 mb-4">
                    @for (i of [5, 4, 3, 2, 1]; track $index ) {
                        <input type="radio" id="star-{{i}}" name="rating" value={{i}} class="hidden">
                        <label for="star-{{i}}" class="text-3xl cursor-pointer grayscale-[1]">{{star}}</label>
                    }
                </div>

                <!-- Optional Comment -->
                <textarea id="comment" name="comment" 
                    placeholder="Comente sobre sua experiência..." value=""
                    class="w-full p-2 bg-slate-100 border rounded outline-none resize-none"
                    cols="45" rows="4"
                    maxlength="180"></textarea>
                
                <!-- Submit and Cancel buttons -->
                <div class="flex gap-4">
                    <button type="button" (click)="onCancel($event)" class="action-btn w-full">
                        Cancelar
                    </button>
                    <button type="submit" (click)="onSubmit($event)" class="action-btn w-full">
                        Enviar
                    </button>
                </div>

            </form>
        </section>
    `,
    styles: `
        .rating label:hover,
        .rating label:hover ~ label {
        filter: grayscale(0) !important;
        }

        .rating input:checked ~ label {
            filter: grayscale(0) !important;
        }
    `,
})
export class Feedback {
    poemId = input<string | undefined>("")
    isOpen = model<boolean>(false)

    onCancel(event: Event) {
        event.preventDefault()
        this.isOpen.set(false)
    }
    
    onSubmit(event: Event) {
        event.preventDefault()
        this.postFeedback()
        this.isOpen.set(false)
    }

    postFeedback() {
        const stars = trace((document.querySelector('input[name="rating"]:checked') as HTMLInputElement)?.value)
        const comment = trace((document.querySelector('#comment') as HTMLTextAreaElement).value)

        trace(post("feedback", { stars: parseInt(stars as string), comment, poem_id: this.poemId()?? "" }))
    }
}