import { Routes } from '@angular/router';

import { WelcomePage } from './welcome/welcome.component';
import { RhythmPatternForms  } from './forms/step-1/step-1.component';
import { MivesForms } from './forms/step-2/step-2.component';
import { WeightsForms } from './forms/step-3/step-3.component';

export const routes: Routes = [
    { path: '', component: WelcomePage },
    { path: 'forms/rhythm', component: RhythmPatternForms },
    { path: 'forms/mives', component: MivesForms },
    { path: 'forms/weights', component: WeightsForms },
];
