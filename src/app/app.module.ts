import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HomeComponent } from './components/home/home.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { OnePieceComponent } from './components/one-piece/one-piece.component';
import { DetectiveConanComponent } from './components/detective-conan/detective-conan.component';
import { DragonBallComponent } from './components/dragon-ball/dragon-ball.component';
import { CaptainMajedComponent } from './components/captain-majed/captain-majed.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponent,
    AnimeListComponent,
    OnePieceComponent,
    DetectiveConanComponent,
    DragonBallComponent,
    CaptainMajedComponent,
    BlogsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
