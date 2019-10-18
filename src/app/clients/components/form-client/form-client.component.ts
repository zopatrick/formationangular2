import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/components/enums/state-client.enum';
import { Client } from 'src/app/shared/components/models/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})

export class FormClientComponent implements OnInit {
  public states = StateClient;
  public form: FormGroup;
  public initForm = new Client();
  public title = '';
  public subTitle = '';
  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log('data=', data);
      this.title = data.title;
      this.subTitle = data.subTitle;
    });
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group(
      {
        id: [this.initForm.id],
        name: [this.initForm.name /*, Validators.compose([Validators.required, Validators.minLength(2)])*/],
        email: [this.initForm.email],
        state: [this.initForm.state]
      });
  }

  public onSubmit() {
    console.log(this.form.value);
  }

}
