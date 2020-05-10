import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'byh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any[] = [];
  notifyMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.createForm();
    this.activatedRoute.params.subscribe(params => {
      if (params.registered === 'success') {
        this.notifyMessage =
          'You have been successfuly registered, you can login now';
      }
    });
  }

  login(): void {
    this.auth.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/rentals']);
        console.log('success');
      },
      errorResponse => {
        this.errors = errorResponse.error.errors;
      }
    );
  }

  createForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          )
        ]
      ],
      password: ['', Validators.required]
    });
  }

  isInvalidForm(fieldName: string): boolean {
    return (
      this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty ||
        this.loginForm.controls[fieldName].touched)
    );
  }

  isRequired(fieldName: string): boolean {
    return this.loginForm.controls[fieldName].errors.required;
  }
}
