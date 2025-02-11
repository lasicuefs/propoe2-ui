import { ComponentFixture, TestBed } from "@angular/core/testing"

import { WeightsForms } from "./step-3.component"

describe("Step3Component", () => {
    let component: WeightsForms
    let fixture: ComponentFixture<WeightsForms>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WeightsForms],
        })
            .compileComponents()

        fixture = TestBed.createComponent(WeightsForms)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
