import { ComponentFixture, TestBed } from "@angular/core/testing"

import { StanzaComponent } from "./stanza"

describe("StanzaPatternComponent", () => {
    let component: StanzaComponent
    let fixture: ComponentFixture<StanzaComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StanzaComponent],
        })
            .compileComponents()

        fixture = TestBed.createComponent(StanzaComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
