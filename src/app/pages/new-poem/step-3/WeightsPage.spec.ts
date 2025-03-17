import { ComponentFixture, TestBed } from "@angular/core/testing"

import { WeightsPage } from "./WeightsPage"

describe("Step3Component", () => {
    let component: WeightsPage
    let fixture: ComponentFixture<WeightsPage>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WeightsPage],
        })
            .compileComponents()

        fixture = TestBed.createComponent(WeightsPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
