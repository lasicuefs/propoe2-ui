import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ProsodyPage } from "./prosody"

describe("Step1Component", () => {
    let component: ProsodyPage
    let fixture: ComponentFixture<ProsodyPage>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProsodyPage],
        })
            .compileComponents()

        fixture = TestBed.createComponent(ProsodyPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
