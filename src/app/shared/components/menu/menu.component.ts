import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  public menuItems:MenuItem[] = []

  ngOnInit(){
    this.menuItems=[
    {
      label:'Pipes de angular',
        icon:'pi pi-desktop',
        items:[
        {
          label:'"Textos y fechas"',
          icon: 'pi pi-align-left',
          routerLink: "/"
        },
        {
          label:'"Numeros"',
          icon: 'pi pi-dollar',
          routerLink: "numbers"

        },
        {
          label:"No comunes",
          icon: 'pi pi-globe',
          routerLink: "uncommon"

        },
      ]
    },
    {
      label:'Piepes personalziados',
      icon:'pi pi-cog',
      items: [
        {
          label:"Otro elemento",
          icon: 'pi pi-cog',
        },
        {
          label:"custom Pipe",
          icon: 'pi pi-cog',
          routerLink:"custom"
        }
      ]
    },
    ]
  }

}
