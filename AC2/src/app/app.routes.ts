
import { Routes } from '@angular/router';
import { CadastrarPedido } from './Components/cadastrar-pedido/cadastrar-pedido';
import { ListaPedidos } from './Components/lista-pedidos/lista-pedidos';

export const routes: Routes = [
  {
    path: 'cadastro',
    component: CadastrarPedido
  },
  {
    path: 'lista',
    component: ListaPedidos
  },
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  }
];
