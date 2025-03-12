import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { LatestProductsComponent } from "./components/latest-products/latest-products.component";
import { FeaturedProductsComponent } from "./components/featured-products/featured-products.component";
import { SellersComponent } from "./components/sellers/sellers.component";
import { AirdropAncComponent } from './components/airdrop-anc/airdrop-anc.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrentdingEarphonesComponent } from './components/trentding-earphones/trentding-earphones.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LatestProductsComponent, FeaturedProductsComponent, SellersComponent,AirdropAncComponent, FooterComponent, TrentdingEarphonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
