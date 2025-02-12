import { Component, Input } from "@angular/core"

@Component({
    selector: "pattern-unit",
    standalone: true,
    templateUrl: "./pattern-unit.component.html",
    styleUrls: ["./pattern-unit.component.css"],
})
export class PatternUnit {
    @Input()
    number: string = "10"
    @Input()
    letter: string = "A"
}
