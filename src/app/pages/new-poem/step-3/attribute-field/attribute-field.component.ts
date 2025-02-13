import { Component, Input } from "@angular/core"

@Component({
    selector: "attribute-field",
    imports: [],
    templateUrl: "./attribute-field.component.html",
    styleUrl: "./attribute-field.component.css",
})
export class AttributeField {
    @Input()
    displayName: string = ""
    
    @Input()
    key: string = ""

    @Input()
    value: number = 1.0
}
