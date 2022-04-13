import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chartBackground: string = 'url( https://thumbs.dreamstime.com/b/medicine-doctor-touching-electronic-medical-record-tablet-dna-digital-healthcare-network-connection-hologram-modern-virtual-154742526.jpg)'
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'number', 'dob', 'address', 'gender', 'department', 'message', 'action'];
  dataSource!: MatTableDataSource<any>;
  cardInfo = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllAppointment();
    this.getCardInfo();
  }



  getCardInfo() {
    this.api.getAppointment().subscribe(data => {
      console.log(data)
      this.cardInfo = data
    })
  }

  getAllAppointment() {
    this.api.getAppointment().subscribe({
      next: (res) => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort
      },
      error: (err) => {
        alert("Error while fetching the records")

      }
    })

  }

  editAppointment(row: any) {
    this.dialog.open(EditDialogComponent, {
      width: '44%',
      data: row
    }).afterClosed().subscribe(data => {
      this.getAllAppointment()
    });
  }

  deleteAppointment(id: number) {
    this.api.deleteAppointment(id).subscribe({
      next: (res) => {
        alert("Product Deleted Successfull")
        this.getAllAppointment();
      },
      error: () => {
        alert("Error while deleting the product")
      }
    })

  }

}
