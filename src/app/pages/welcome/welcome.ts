import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
    selector: "app-welcome",
    imports: [RouterLink],
    templateUrl: "./welcome.html",
    styleUrl: "./welcome.css",
})
export class WelcomePage {
}
