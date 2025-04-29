import { Component, forwardRef, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicItemsFormConfig } from './model';
import { InputComponent } from '../../components/input/input.component';
import { ButtonComponent } from '../../components/button/button.component';
import { ValidatorFn } from '@angular/forms';
import { SelectComponent } from '../../components';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'sx-dynamic-form',
  imports: [ReactiveFormsModule, InputComponent, ButtonComponent, SelectComponent, MatError],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DynamicFormComponent),
      multi: true,
    },
  ],
})
export class DynamicFormComponent {
  @Input({ required: true }) dynamicFields!: DynamicItemsFormConfig[];
  @Input({ required: true }) form!: FormGroup;

  static createForm(dynamicFields: DynamicItemsFormConfig[]): FormGroup {
    const group: { [key: string]: FormControl } = {};

    dynamicFields.forEach((row) => {
      row.itemsRow.fields.forEach((field) => {
        const validators = this.getValidators(field.validators);
        group[field.name] = new FormControl(field.value ?? '', validators);
      });
    });

    return new FormGroup(group);
  }

  static getValidators(validators: any): ValidatorFn[] {
    const validatorsArray: ValidatorFn[] = [];

    if (validators?.required) {
      validatorsArray.push(Validators.required);
    }
    if (validators?.minLength) {
      validatorsArray.push(Validators.minLength(validators.minLength));
    }
    if (validators?.email) {
      validatorsArray.push(Validators.email);
    }

    return validatorsArray;
  }
}
