import { RouterConfig } from "@angular/router";
import { nsProvideRouter } from "nativescript-angular/router"
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";

export const routes: RouterConfig = [
  { path: "Home", component: LoginComponent }
  

];

export const navigatableComponents = [
  LoginComponent
];