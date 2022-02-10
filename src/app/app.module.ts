import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { FunctionComponent } from './function/function.component';
import { EventComponent } from './event/event.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ConditionComponent } from './condition/condition.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleComponent } from './toggle/toggle.component';
import { BootStrapComponent } from './boot-strap/boot-strap.component';
import { MaterialUIComponent } from './material-ui/material-ui.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ParentChildComponent } from './parent-child/parent-child.component';
import { ChildComponent } from './parent-child/child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './pipes/custom_pipe/custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    InterpolationComponent,
    FunctionComponent,
    EventComponent,
    PropertyBindingComponent,
    ConditionComponent,
    SwitchComponent,
    ForComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    ToggleComponent,
    BootStrapComponent,
    MaterialUIComponent,
    TodoListComponent,
    ParentChildComponent,
    ChildComponent,
    PipesComponent,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
