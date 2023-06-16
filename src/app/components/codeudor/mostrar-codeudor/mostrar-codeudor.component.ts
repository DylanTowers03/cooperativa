import { Component, OnInit } from '@angular/core';
import { CodeudorI } from 'src/app/models/codeudor';
import { Router } from '@angular/router';
import { CodeudorService } from '../../../services/codeudor.service'

@Component({
  selector: 'app-mostrar-codeudor',
  templateUrl: './mostrar-codeudor.component.html',
  styleUrls: ['./mostrar-codeudor.component.css']
})
export class MostrarCodeudorComponent implements OnInit {
  public codeudor:CodeudorI[] = []
  public displayedColumns: string[] = ["id", "nombreCodeudor","apellidoCodeudor","ciudadCodeudor", "telefonoCodeudor","direccionCodeudor","correoCodeudor","posibleSocio"]
  constructor(
    private codeudorService: CodeudorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarCodeudor()
  }

  mostrarCodeudor() {
    this.codeudorService.getAllCodeudor()
      .subscribe({
        next: (data) => {
          this.codeudor = data.codeudor
          console.log(this.codeudor)
        }
      })
  }
}
