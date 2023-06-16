import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opc: MenuItem[] = [];
  estilosMenu: {}= {
    'background-color': '#8DC3D8',
    'border': '0',


  }
  constructor() { }

  ngOnInit(): void {

    this.opc = [
      {
        label: 'Codeudor',
        icon: 'pi pi-fw pi-users',
        routerLink: '/codeudor'
        // items: [
        //   {
        //     label: 'Crud Cliente'
        //   },
        //   {
        //     label: 'HTML 2'
        //   }
        // ]
      },
      {
        label: 'Modalidad',
        icon: 'pi pi-fw pi-qrcode',

      },
      {
        label: 'Prestamos',
        icon: 'pi pi-fw pi-shopping-bag',
      },
      {
        label: 'Socios',
        icon: 'pi pi-fw pi-shopping-cart',
      }

    ];
  }

}
