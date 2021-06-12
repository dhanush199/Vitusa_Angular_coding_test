import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnmatchedStringComponent } from './unmatched-string/unmatched-string.component';
import { UserEmailComponent } from './user/container/user-email-id.component';

export const routes: Routes = [
  { path: 'consult', component: UserEmailComponent },
  { path: 'unmatched-string', component: UnmatchedStringComponent },
  { path: '**', redirectTo: 'consult' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
