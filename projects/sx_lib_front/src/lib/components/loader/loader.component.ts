import { AsyncPipe, NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { LoaderService } from "../../services/loader/loader.service";

@Component({
  selector: "sx-loader",
  templateUrl: "loader.component.html",
  styleUrls: ["loader.component.scss"],
  imports: [NgStyle, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  @Input() color: "primary" | "secondary" | 'support' = "support";
  @Input() text = "";
  @Input() size = 40;
  @Input({ required: true }) backDrop!: boolean;

  constructor(public loaderService: LoaderService) {}
}
