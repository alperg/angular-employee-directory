import { Component } from '@angular/core';
import { DataService } from './data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public employees: any = [];
  private allEmployees: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.dataService.getEmployees().subscribe((data: any[]) => {
      const newData = data.map(emp => {
        const empStartDate = moment(emp.date, 'M/D/YYYY');
        emp.daysPassed = `${moment().diff(empStartDate, 'days')} days`;
        return emp;
      });
      this.employees = newData;
      this.allEmployees = newData;
    });
  }

  doSearch(searchTerm) {
    if (searchTerm === "") {
      this.fetchEmployees();
    } else {
      const filteredData = this.allEmployees.filter(emp =>
        emp.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      this.employees = filteredData;
    }
  }
}
