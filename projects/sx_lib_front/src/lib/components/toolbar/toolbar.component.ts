import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../../models/usuario';
import { AvatarComponent } from '../avatar/avatar.component';
import { TextComponent } from '../text/text.component';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'sx-toolbar',
  imports: [TextComponent, AvatarComponent, AsyncPipe],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  @Input({ required: true }) img!: string;
  @Output() logout = new EventEmitter<void>();
  title = 'SX Horizon';
  usuario$: Observable<Usuario> = of();
  private authService = inject(AuthService);

  constructor() {

  }

  ngOnInit(): void {
    this.usuario$ = this.authService.user$;
  }

}
