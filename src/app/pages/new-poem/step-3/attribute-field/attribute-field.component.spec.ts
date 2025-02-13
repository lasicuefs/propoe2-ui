import { ComponentFixture, TestBed } from "@angular/core/testing"

import { WeightOption } from "./attribute-field.component"

describe("AttributeFieldComponent", () => {
    let component: WeightOption
    let fixture: ComponentFixture<WeightOption>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WeightOption],
        })
            .compileComponents()

        fixture = TestBed.createComponent(WeightOption)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
