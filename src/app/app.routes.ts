import { Routes } from "@angular/router"

import { WelcomePage } from "./pages/welcome/welcome.component"
import { RhythmPatternForms } from "./pages/new-poem/step-1/step-1.component"
import { MivesForms } from "./pages/new-poem/step-2/step-2.component"
import { WeightsForms } from "./pages/new-poem/step-3/step-3.component"
import { PoemPage } from "./pages/poem/poem.component"

export const routes: Routes = [
    { path: "", component: WelcomePage },
    { path: "new/rhythm", component: RhythmPatternForms },
    { path: "new/mives", component: MivesForms },
    { path: "new/weights", component: WeightsForms },
    { path: "poem", component: PoemPage },
]
