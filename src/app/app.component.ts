import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { FlightAddEditComponent } from './flight-add-edit/flight-add-edit.component';
import {FlightArrivalService} from "./services/flight-arrival.service";
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CoreService} from "./core/core.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'experience',
    'package',
    'email',
    'dob',
    'programingLanguage',
    'gender',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _flightService: FlightArrivalService,
    private _coreService: CoreService
  ) {}

  ngOnInit() {
    this.getFlightArrival();
  }

  openFlightAddEditForm(){
    const dialogRef = this._dialog.open(FlightAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFlightArrival();
        }
      },
    });
  }
  getFlightArrival() {
    this._flightService.getFlightArrival().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openFlightEditForm(data: any) {
    const dialogRef = this._dialog.open(FlightAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFlightArrival();
        }
      },
    });
  }

  deleteFlightArrival(id: number) {
    this._flightService.deleteFlightArrival(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Flight deleted!', 'done');
        this.getFlightArrival();
      },
      error: console.log,
    })
  }
}
