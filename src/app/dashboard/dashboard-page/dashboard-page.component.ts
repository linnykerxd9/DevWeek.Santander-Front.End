
import { DashboardService } from './../dashboard.service';

import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.fetchStock();
  }

  async fetchStock(): Promise<void>{
    this.stocks = await this.dashboardService.getStock();
  }

}
