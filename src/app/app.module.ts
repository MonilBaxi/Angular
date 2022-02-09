import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
