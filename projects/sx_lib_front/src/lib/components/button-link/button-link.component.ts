import { NgIf } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import {
  ButtonLinkBoolean,
  ButtonLinkColor,
  ButtonLinkSize,
} from "./button-link.types";
import { IconSvgComponent } from "../icon-svg/icon-svg.component";

@Component({
  selector: "-button-link",
  templateUrl: "./button-link.component.html",
  styleUrls: ["./button-link.component.scss"],
  imports: [IconSvgComponent, NgIf, RouterLink]
})
export class ButtonLinkComponent implements OnInit {
  @Input() color: ButtonLinkColor = "default-color";
  @Input() size: ButtonLinkSize = "sm";
  @Input() withArrow: ButtonLinkBoolean = false;
  @Input() onlyLeftArrow: ButtonLinkBoolean = false;
  @Input() onlyRightArrow: ButtonLinkBoolean = false;
  @Input() text = "";
  @Input() route = "";
  @Input() isNavigateOn = true;
  arrowAnimation = true;

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
