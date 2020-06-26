import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostsComponent } from './components/posts/posts.component'


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'addpost' },
  { path: 'addpost', component: AddPostComponent },
  { path: 'editpost/:id', component: EditPostComponent },
  { path: 'posts', component: PostsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
