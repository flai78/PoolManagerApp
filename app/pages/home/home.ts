import {Component} from "@angular/core";

@Component({
    selector: "home",
    templateUrl: "./pages/home/home.html",
})
export class HomeComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
