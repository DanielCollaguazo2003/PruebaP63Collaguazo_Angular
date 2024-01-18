import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { Deuda } from 'src/app/models/Deuda';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  clientes: any
  cliente?: Cliente;
  deudas: any;


  constructor(private clienteService: ClienteService) {

  }

  buscarDeud(){
    this.clientes = this.clienteService.getClientes();
  }

}
