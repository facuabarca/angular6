import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, SidebarService, SettingsService, UsuarioService, LoginGuard, SubirArchivoService } from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SharedService,
    SidebarService,
    SettingsService,
    UsuarioService,
    LoginGuard,
    SubirArchivoService
  ]
})
export class ServiceModule { }
