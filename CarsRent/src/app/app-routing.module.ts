import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { AntyplagiatComponent } from './antyplagiat/antyplagiat.component';




const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'panel', component:PanelComponent, children:[
    {
      path: 'plagiat',
      component: AntyplagiatComponent,
    },
    {
      path: '',
      redirectTo: 'plagiat',
      pathMatch: 'full'
    }
  ]},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
