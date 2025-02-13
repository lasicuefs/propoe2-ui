import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { RouterLink } from "@angular/router"

@Component({
    selector: "return-back",
    imports: [CommonModule, RouterLink],
    templateUrl: "./back-btn.component.html",
    styleUrl: "./back-btn.component.css",
})
export class ReturnButton {
    @Input()
    route: string = ""
    @Input()
    pageTitle: string = ""
}
