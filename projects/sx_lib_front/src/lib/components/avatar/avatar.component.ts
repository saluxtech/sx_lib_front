import { Component, Input } from '@angular/core';
import { TextComponent } from '../text/text.component';
import { Usuario } from '../../models/usuario/usuario.interface';

@Component({
  selector: 'sx-avatar',
  imports: [TextComponent],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() usuario: Usuario | null = null;
}
