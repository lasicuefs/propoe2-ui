import { Routes } from "@angular/router"

import { WelcomePage } from "./pages/welcome/welcome.component"
import { ProsodyForms } from "./pages/new-poem/step-1/prosody"
import { MivesForms } from "./pages/new-poem/step-2/step-2.component"
import { WeightsForms } from "./pages/new-poem/step-3/weights"
import { PoemPage } from "./pages/poem/poem.component"

export const routes: Routes = [
    { path: "", component: WelcomePage },
    { path: "new/rhythm", component: ProsodyForms },
    { path: "new/mives", component: MivesForms },
    { path: "new/weights", component: WeightsForms },
    { path: "poem", component: PoemPage },
]
