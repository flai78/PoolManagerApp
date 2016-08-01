// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {HomeComponent} from "./pages/home/home";
import { LoginComponent } from './pages/login/login.component';

nativeScriptBootstrap(LoginComponent);