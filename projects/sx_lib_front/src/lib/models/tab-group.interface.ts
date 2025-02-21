import { TemplateRef } from '@angular/core';
import { IconeModel } from './icone.interface';

export interface Tab {
  label: string;
  content?: TemplateRef<any>;
  icone?: IconeModel;
}
