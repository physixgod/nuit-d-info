import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { OnePieceComponent } from './components/one-piece/one-piece.component';
import { DragonBallComponent } from './components/dragon-ball/dragon-ball.component';
import { CaptainMajedComponent } from './components/captain-majed/captain-majed.component';
import { DetectiveConanComponent } from './components/detective-conan/detective-conan.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'animeList', component: AnimeListComponent },
  { path: 'onepiece', component: OnePieceComponent },
  { path: 'dc', component: DetectiveConanComponent },
  { path: 'majed', component: CaptainMajedComponent },
  { path: 'db', component: DragonBallComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
