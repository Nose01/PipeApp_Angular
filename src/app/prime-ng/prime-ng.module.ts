import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Fieldset, FieldsetModule } from 'primeng/fieldset';
// import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import {  ToolbarModule } from 'primeng/toolbar';


@NgModule({
  exports:[
    // MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule
  ]

})
export class PrimeNgModule { }
