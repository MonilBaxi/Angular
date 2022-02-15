import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutChildComponent } from './about/about-child/about-child.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ToggleComponent } from './toggle/toggle.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'home',
    component:HelloWorldComponent
  },
  {
    path:'about',
    component:AboutComponent,
    children:[
      {
        path:'aboutme',
        component:AboutChildComponent
      }
    ]
  },
  {
    path:'user/:id',
    component:UsersComponent
  },
  {
    path:'**',//Wild-card Router
    component:ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
