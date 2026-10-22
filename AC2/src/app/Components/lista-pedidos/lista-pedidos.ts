import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {PedidosService} from '../../PedidosService/pedidos-service';
import {Pedidos} from '../../Interface/pedidos';

@Component({
  imports: [RouterLink],
  selector: 'app-lista-pedidos',
  styleUrl: './lista-pedidos.css',
  templateUrl: './lista-pedidos.html',
})
export class ListaPedidos {
  pedidos: Pedidos[] = [];

  constructor(private pedidosService: PedidosService) {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.pedidos = this.pedidosService.listar();
  }

 aceitar(id: number): void {
  this.pedidosService.pedidoAceito(id);
  this.atualizarLista();
}

emPreparo(id: number): void {
  this.pedidosService.pedidoEmPreparo(id);
  this.atualizarLista();
}

pronto(id: number): void {
  this.pedidosService.pedidoPronto(id);
  this.atualizarLista();
}

emRota(id: number): void {
  this.pedidosService.pedidoSaiuParaEntrega(id);
  this.atualizarLista();
}

entregue(id: number): void {
  this.pedidosService.marcarEntregue(id);
  this.atualizarLista();
}

cancelar(id: number): void {
  this.pedidosService.remover(id);
  this.atualizarLista();
}

  totalPedidos(): number {
    return this.pedidos.length;
  }

  pedidosConcluidos(): number {
    return this.pedidos.filter(
      pedido => pedido.status === 'Entregue'
    ).length;
  }

  pedidosPendentes(): number {
    return this.pedidos.filter(
      pedido => pedido.status !== 'Entregue'
    ).length;
  }
}