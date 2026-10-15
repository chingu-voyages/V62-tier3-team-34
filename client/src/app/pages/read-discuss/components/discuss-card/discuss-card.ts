import { Component, input } from "@angular/core";
import { DiscussCard } from "../../interface";

@Component({
  selector: "app-discuss-card",
  templateUrl: "./discuss-card.html",
})
export class DiscussCardComponent {
    discussCard = input.required<DiscussCard>()
}