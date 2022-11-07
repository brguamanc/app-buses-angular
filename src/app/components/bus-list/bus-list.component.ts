import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],
})
export class BusListComponent implements OnInit {
  Bus: any = [];
  constructor(private apiService: ApiService) {
    this.readBus();
  }

  ngOnInit(): void {}

  readBus() {
    this.apiService.getBuses().subscribe((data) => {
      this.Bus = data;
    });
  }
  removeBus(bus, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteBus(bus.busId).subscribe((data) => {
        this.Bus.splice(index, 1);
      });
    }
  }
}
