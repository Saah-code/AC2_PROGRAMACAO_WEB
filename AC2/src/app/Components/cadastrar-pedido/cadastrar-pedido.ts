import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {PedidosService} from '../../PedidosService/pedidos-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink],
  selector: 'app-cadastrar-pedido',
  styleUrl: './cadastrar-pedido.css',
  templateUrl: './cadastrar-pedido.html',
})
export class CadastrarPedido {
constructor(private pedidosService: PedidosService){}

  nomePedido: string = '';

  cadastrarPedido(): void{
    if(this.nomePedido.trim() !== ''){
      this.pedidosService.adicionar(this.nomePedido.trim());
      this.nomePedido = '';
    }
  }
}
