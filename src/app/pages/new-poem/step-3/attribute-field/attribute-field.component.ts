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

    ngOnChanges() {
        if (!this.value) {
            this.value = 1.0
            return
        }

        if (this.value < 0 || this.value > 1) {
            throw new Error("Value must be a float between 0 and 1")
        }
    }
}
