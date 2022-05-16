import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  placeholderPaese = 'seleziona il tuo paese';
  signInForm = this.fb.group({
    paese: ['', [Validators.required]],
    giorno: ['', [Validators.required]],
    mese: ['', [Validators.required]],
    anno: ['', [Validators.required]],
  });

  ngOnInit(): void {}
}
