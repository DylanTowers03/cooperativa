import { EmailValidator } from "@angular/forms";

export interface CodeudorI {
    id?: number;
    nombreCodeudor: string
    apellidoCodeudor: string
    ciudadCodeudor: string
    telefonoCodeudor: string
    direccionCodeudor: string
    correoCodeudor: string
    posibleSocio: boolean
}