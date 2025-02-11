import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PatternUnit } from "./pattern-unit.component"

describe("PatternUnitComponent", () => {
    let component: PatternUnit
    let fixture: ComponentFixture<PatternUnit>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PatternUnit],
        })
            .compileComponents()

        fixture = TestBed.createComponent(PatternUnit)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
