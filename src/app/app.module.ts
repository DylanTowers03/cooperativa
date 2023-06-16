import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostrarCodeudorComponent } from './components/codeudor/mostrar-codeudor/mostrar-codeudor.component';
import { CrearCodeudorComponent } from './components/codeudor/crear-codeudor/crear-codeudor.component';
import { ActualizarCodeudorComponent } from './components/codeudor/actualizar-codeudor/actualizar-codeudor.component';
import { EliminarCodeudorComponent } from './components/codeudor/eliminar-codeudor/eliminar-codeudor.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MostrarCodeudorComponent,
    CrearCodeudorComponent,
    ActualizarCodeudorComponent,
    EliminarCodeudorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ToastModule,


  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
