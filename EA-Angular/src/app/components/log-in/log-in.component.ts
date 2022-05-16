import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  LogInForm = this.fb.group({
    telefono: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  ngOnInit(): void {}
}
