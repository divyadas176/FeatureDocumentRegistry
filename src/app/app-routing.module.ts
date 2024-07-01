import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectAppComponent } from './components/select-app/select-app.component';
import { GridComponent } from './components/grid/grid.component';
import {DeleteConfirmComponent} from './components/delete-confirm/delete-confirm.component'

const routes: Routes = [
  {path:'', redirectTo:'/featureDocReg', pathMatch:'full'},
  {path:'featureDocReg', component: SelectAppComponent},
  {path:'featureDocReg/:applicationName', component: GridComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
