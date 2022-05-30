import { Component } from "@angular/core";
import { GlobalConstants } from "../common/global-constants";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  title = GlobalConstants.appTitle;
  author = GlobalConstants.author;
}
