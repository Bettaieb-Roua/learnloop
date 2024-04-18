import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export class PasswordValidator {

    static areEqual(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            const password = control.get('password');
            const confirmPassword = control.get('confirm_password');

            if (!password || !confirmPassword) {
                return null;
            }

            return password.value === confirmPassword.value ? null : { areEqual: true };
        };
    }
}
