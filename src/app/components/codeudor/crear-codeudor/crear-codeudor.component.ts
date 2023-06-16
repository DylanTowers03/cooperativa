import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CodeudorService } from 'src/app/services/codeudor.service';
import { CodeudorI } from 'src/app/models/codeudor';




@Component({
  selector: 'app-crear-codeudor',
  templateUrl: './crear-codeudor.component.html',
  styleUrls: ['./crear-codeudor.component.css']
})
export class CrearCodeudorComponent implements OnInit {

  public form:FormGroup=this.formBuilder.group({
    nombreCodeudor: ['', [Validators.required]],
    apellidoCodeudor: ['', [Validators.required]],
    ciudadCodeudor: ['', [Validators.required]],
    telefonoCodeudor: ['', [Validators.required]],
    direccionCodeudor: ['', [Validators.required]],
    correoCodeudor: ['', [Validators.required]],

  });

  constructor(
    private formBuilder: FormBuilder,
    private codeudorService: CodeudorService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    const formValue: CodeudorI = this.form.value;
    console.log(formValue);
    this.codeudorService.createCodeudor(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('codeudor');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/addcodeudor');
  }

  get nombreCodeudor() { return this.form.get('nombreCodeudor'); }
  get apellidoCodeudor() { return this.form.get('apellidoCodeudor'); }
  get ciudadCodeudor() { return this.form.get('ciudadCodeudor'); }

  get telefonoCodeudor() { return this.form.get('telefonoCodeudor'); }
  get direccionCodeudor() { return this.form.get('direccionCodeudor'); }
  get correoCodeudor() { return this.form.get('correoCodeudor'); }


}
