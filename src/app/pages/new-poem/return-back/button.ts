import { Component, Input } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
    selector: "return-back",
    imports: [RouterLink],
    templateUrl: "./button.html",
    styleUrl: "./button.css",
})
export class ReturnButton {
    @Input()
    route: string = ""
    @Input()
    pageTitle: string = ""
}
