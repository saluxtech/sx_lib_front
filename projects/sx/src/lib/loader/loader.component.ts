import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "sx-loader",
  templateUrl: "loader.component.html",
  styleUrls: ["loader.component.scss"],
  standalone: true,
  imports: [CommonModule]
})
export class LoaderComponent implements OnInit {
  @Input() color: "primary" | "secondary" | 'support' = "primary";
  @Input() text: string | undefined;
  @Input() size: number = 20
  
  constructor() {}

  ngOnInit() {}
}
