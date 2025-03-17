import { ComponentFixture, TestBed } from "@angular/core/testing"

import { MivesPage } from "./MivesPage"

describe("Step2Component", () => {
    let component: MivesPage
    let fixture: ComponentFixture<MivesPage>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MivesPage],
        })
            .compileComponents()

        fixture = TestBed.createComponent(MivesPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
