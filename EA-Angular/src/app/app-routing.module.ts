import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TemplateContainerComponent } from "./BaseTemplate/template-container/template-container.component";
import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
    {path: 'home', component: TemplateContainerComponent, 
        children: [
            {path: '', redirectTo: 'main', pathMatch: 'full'},
            {path: '**', redirectTo: 'main', pathMatch: 'full' },
            {path:'main', component: MainPageComponent},
            
        ]},
    
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '**', redirectTo: '/home', pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})

export class AppRoutingModule {

}
