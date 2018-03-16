import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SallerComponent} from './saller/saller.component';
import {ChatComponent} from './chat/chat.component';
import {ProductResolve} from './guide/product.resolve';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {
    path: 'product/:id', component: ProductComponent,
    children: [
      {path: '', component: ProductDescComponent},
      {path: 'saller/:sallerId', component: SallerComponent}
    ],
    resolve: {product: ProductResolve}
  },
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolve]
})
export class AppRoutingModule {
}
