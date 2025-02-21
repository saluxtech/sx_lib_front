import { Component, Input, OnInit } from "@angular/core";
import {
  ButtonLinkBoolean,
  ButtonLinkColor,
  ButtonLinkSize,
} from "./button-link.types";
import { Router } from "@angular/router";

@Component({
  selector: "-button-link",
  templateUrl: "./button-link.component.html",
  styleUrls: ["./button-link.component.scss"],
  standalone: false
})
export class ButtonLinkComponent implements OnInit {
  @Input() color: ButtonLinkColor = "default-color";
  @Input() size: ButtonLinkSize = "sm";
  @Input() withArrow: ButtonLinkBoolean = false;
  @Input() onlyLeftArrow: ButtonLinkBoolean = false;
  @Input() onlyRightArrow: ButtonLinkBoolean = false;
  @Input() text: string = "";
  @Input() route: string = "";
  @Input() isNavigateOn: boolean = true;
  arrowAnimation: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if(this.withArrow){
      this.onlyLeftArrow = false;
      this.onlyRightArrow = false;
    }
  }

  onMouseEnter() {
    this.arrowAnimation = false;
  }

  onMouseLeave() {
    this.arrowAnimation = true;
  }

  navigate() {
    if (this.isNavigateOn) this.router.navigateByUrl(this.route);
  }
}
