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
  @Input() text: string = "Carregando...";
  @Input() size: number = 40;
  @Input() backDrop: boolean = true;

  constructor(public loaderService: LoaderService) {}
}
