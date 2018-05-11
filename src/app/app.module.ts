import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './core/services/blog/blog.service';
import { ItalianCuisineComponent } from './recipes/italian-cuisine/italian-cuisine.component';
import { SpanishCuisineComponent } from './recipes/spanish-cuisine/spanish-cuisine.component';
import { FooterComponent } from './footer/footer.component';
import { ItalianCuisineService } from './core/services/italian-cuisine/italian-cuisine.service';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    ItalianCuisineComponent,
    SpanishCuisineComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BlogService, ItalianCuisineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
