import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxComponent } from './inbox/inbox.component';
import { SentComponent } from './sent/sent.component';



const routes: Routes = [
{path:"inbox",component:InboxComponent},
{path:"sent",component:SentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
