import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ShopComponent } from "./pages/shop/shop.component";
import { ProductPageComponent } from "./pages/product-page/product-page.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "shop", component: ShopComponent },
    { path: "product/:id", component: ProductPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }