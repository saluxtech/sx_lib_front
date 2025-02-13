import {AbstractControl, FormGroup} from '@angular/forms';

export function markControlsAsDirtyUtils(controls: any) {
    if (!Array.isArray(controls)) {
        for (const controlName in controls) {
            if (!Array.isArray(controls[controlName].controls)) {
                (controls[controlName] as AbstractControl).markAsDirty();
            } else {
                markControlsAsDirtyUtils(controls[controlName].controls);
            }
        }
    } else {
        controls.forEach((formGroup: FormGroup) => {
            if (formGroup.controls) {
                markControlsAsDirtyUtils(formGroup.controls);
            } else {
                (formGroup as AbstractControl).markAsDirty();
            }
        })
    }
}

export function markControlsAsTouchedUtils(controls: any) {
  if (!Array.isArray(controls)) {
    for (const controlName in controls) {
      if (!Array.isArray(controls[controlName].controls)) {
        (controls[controlName] as AbstractControl).markAsTouched();
      } else {
        markControlsAsDirtyUtils(controls[controlName].controls);
      }
    }
  } else {
    controls.forEach((formGroup: FormGroup) => {
      if (formGroup.controls) {
        markControlsAsDirtyUtils(formGroup.controls);
      } else {
        (formGroup as AbstractControl).markAsTouched();
      }
    })
  }
}

export function markControlsAsTouchedAndDirtyUtils(controls: any) {
  if (!Array.isArray(controls)) {
    for (const controlName in controls) {
      if (!Array.isArray(controls[controlName].controls)) {
        (controls[controlName] as AbstractControl).markAsTouched();
        (controls[controlName] as AbstractControl).markAsDirty();
      } else {
        markControlsAsTouchedAndDirtyUtils(controls[controlName].controls);
      }
    }
  } else {
    controls.forEach((formGroup: FormGroup) => {
      if (formGroup.controls) {
        markControlsAsTouchedAndDirtyUtils(formGroup.controls);
      } else {
        (formGroup as AbstractControl).markAsTouched();
        (formGroup as AbstractControl).markAsDirty();
      }
    })
  }
}
