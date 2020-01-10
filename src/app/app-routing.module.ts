import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralProductsComponent} from './components/general-products/general-products.component'
import { OtherProductsComponent} from './components/other-products/other-products.component'

const routes: Routes = [
  { path: '', redirectTo: '/general', pathMatch: 'full' },
  { path: 'general', component:  GeneralProductsComponent},
  { path: 'other', component:  OtherProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
