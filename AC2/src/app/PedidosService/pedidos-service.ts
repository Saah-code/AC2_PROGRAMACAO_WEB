import { Injectable } from '@angular/core';
import { Pedidos} from '../Interface/pedidos';

@Injectable({
    providedIn: 'root'
})
export class PedidosService{
   private pedidos: Pedidos[] = [];
  private proximoId = 1;

  listar(): Pedidos[] {
    return this.pedidos;
  }

  adicionar(nomePedido: string): void {
    const novoPedido: Pedidos = {
      id: this.proximoId++,
      nomePedido: nomePedido,
      status: 'Pendente'
    };

    this.pedidos.push(novoPedido);
  }

  remover(id: number): void {
    this.pedidos = this.pedidos.filter(
      pedido => pedido.id !== id
    );
  }

  pedidoAceito(id: number): void {
    this.atualizarStatus(id, 'Aceito');
  }

  pedidoEmPreparo(id: number): void {
    this.atualizarStatus(id, 'Em preparo');
  }

  pedidoPronto(id: number): void {
    this.atualizarStatus(id, 'Pronto');
  }

  pedidoSaiuParaEntrega(id: number): void {
    this.atualizarStatus(id, 'Saiu para a entrega');
  }

  marcarEntregue(id: number): void {
    this.atualizarStatus(id, 'Entregue');
  }

  private atualizarStatus(id: number, status: string): void {
    const pedido = this.pedidos.find(
      pedido => pedido.id === id
    );

    if (pedido) {
      pedido.status = status;
    }
  }
}
