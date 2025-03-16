import { Routes } from "@angular/router"

import { WelcomePage } from "./pages/welcome/welcome"
import { ProsodyPage } from "./pages/new-poem/step-1/ProsodyPage"
import { MivesPage } from "./pages/new-poem/step-2/MivesPage"
import { WeightsPage } from "./pages/new-poem/step-3/weights"
import { PoemPage } from "./pages/poem/poem.component"

export const routes: Routes = [
    { path: "", component: WelcomePage },
    { path: "new/rhythm", component: ProsodyPage },
    { path: "new/mives", component: MivesPage },
    { path: "new/weights", component: WeightsPage },
    { path: "poem", component: PoemPage },
]
