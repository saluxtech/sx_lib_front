import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'sx-spinner',
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  @Input() mensagem = '';
}
