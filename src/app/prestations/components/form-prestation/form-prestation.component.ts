import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/shared/components/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/components/models/prestation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = State;
  public form: FormGroup;
  public initForm = new Prestation();
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
        typePresta: [this.initForm.typePresta,
          Validators.required],
        client: [this.initForm.client,
         Validators.compose([Validators.required, Validators.minLength(2)])],
        nbJours: [this.initForm.nbJours],
        tjmHt: [this.initForm.tjmHt],
        tauxTva: [this.initForm.tauxTva],
        state:  [this.initForm.state],
        comment: [this.initForm.comment]
      });
  }

  public onSubmit() {
    console.log(this.form.value);
  }


}
