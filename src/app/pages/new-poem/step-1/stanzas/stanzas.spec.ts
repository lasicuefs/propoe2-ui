import { ComponentFixture, TestBed } from "@angular/core/testing"

import { Stanzas } from "./stanzas"

describe("StanzaPatternComponent", () => {
    let component: Stanzas
    let fixture: ComponentFixture<Stanzas>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Stanzas],
        })
            .compileComponents()

        fixture = TestBed.createComponent(Stanzas)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
