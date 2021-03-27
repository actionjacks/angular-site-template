import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { SocialFeedComponent } from './components/social-feed/social-feed.component';
import { MeetMeComponent } from './components/meet-me/meet-me.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    FeaturedComponent,
    SocialFeedComponent,
    MeetMeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
