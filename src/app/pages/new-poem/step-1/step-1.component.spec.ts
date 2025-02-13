import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ProsodyForms } from "./step-1.component"

describe("Step1Component", () => {
    let component: ProsodyForms
    let fixture: ComponentFixture<ProsodyForms>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProsodyForms],
        })
            .compileComponents()

        fixture = TestBed.createComponent(ProsodyForms)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
