import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FlightArrivalService} from "../services/flight-arrival.service";
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CoreService} from "../core/core.service";

@Component({
  selector: 'app-flight-add-edit',
  templateUrl: './flight-add-edit.component.html',
  styleUrls: ['./flight-add-edit.component.scss']
})
export class FlightAddEditComponent implements OnInit {
  flightForm: FormGroup;

  programingLanguage: string[] = [
    'PHP',
    'Python',
    'AngularJS'
  ]

  constructor(
    private _fb: FormBuilder,
    private _flightService: FlightArrivalService,
    private _dialogRef: MatDialogRef<FlightAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.flightForm = this._fb.group({
      firstName: '',
      lastName: '',
      experience: '',
      package: '',
      email: '',
      dob: '',
      programingLanguage: '',
      gender: '',
    })
  }

  ngOnInit() {
    this.flightForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.flightForm.valid) {
      if (this.data) {
        this._flightService.updateFlightArrival(this.data.id, this.flightForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Flight update successfully.');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
      else
      {
        this._flightService.addFlightArrival(this.flightForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Flight added successfully.');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
