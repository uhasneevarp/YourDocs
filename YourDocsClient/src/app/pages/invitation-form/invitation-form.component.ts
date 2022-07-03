import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-invitation-form',
  templateUrl: './invitation-form.component.html',
  styleUrls: ['./invitation-form.component.css']
})
export class InvitationFormComponent implements OnInit {
  profileForm: any;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        zip: ['', Validators.required]
      }),
      contacts: this.fb.array([
        this.fb.group(        {
          mobileNumber: ['', Validators.required],
          homeNumber:  ['', Validators.required],
          workNumber:['', Validators.required]
        })
      ])
    })
  }
  onSubmit(){
    console.log(this.profileForm.value);
  }
  updateAddress(){
    this.profileForm.patchValue({
      address:{
        street: "211 Wellington Street",
        city: "New York",
        zip: "10001"
      }
    })
    console.log(this.profileForm.value);
  }
  addMoreContact(){
    this.profileForm.controls.contacts.push( this.fb.group(        {
      mobileNumber: ['', Validators.required],
      homeNumber:  ['', Validators.required],
      workNumber:['', Validators.required]
    }));
  }
  fillContactValues(){
    // for (let control of this.contacts.controls){
    //   control.patchValue({
    //     mobileNumber: '11111',
    //     homeNumber:  '22222',
    //     workNumber: '33333',
    //   })
    // }
    this.contacts.controls.forEach(controls=>{
     controls.patchValue({
        mobileNumber: '11111',
        homeNumber:  '22222',
        workNumber: '33333',
      })
    })
  }
  get contacts(){
    return this.profileForm.get('contacts') as FormArray;
  }
}
