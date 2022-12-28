import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BevorstehendeEventsComponent } from "./bevorstehende-events/bevorstehende-events.component";
import { AccountverwaltungComponent } from './accountverwaltung/accountverwaltung.component';
import { AnmeldemaskeComponent } from './anmeldemaske/anmeldemaske.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistrierungsmaskeComponent } from './registrierungsmaske/registrierungsmaske.component';
import { KontaktformularComponent } from './kontaktformular/kontaktformular.component';
import { SkipasskaufenComponent } from './skipasskaufen/skipasskaufen.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'bevorstehendeEvents',
    component: BevorstehendeEventsComponent},
  {path: 'accountverwaltung',
       component: AccountverwaltungComponent
  },
  {path: 'footerComponent',
       component: FooterComponent
  },
  {path: 'headerComponent',
       component: HeaderComponent
  },
  {path: 'registrierungsmaske',
       component: RegistrierungsmaskeComponent
  },
  {path: 'kontaktformular',
       component: KontaktformularComponent
  },
  {path: 'skipasskaufen',
       component: SkipasskaufenComponent
  },
  {path: 'homepage',
       component: HomepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
