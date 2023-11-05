import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-additional-fee',
    templateUrl: './additional-fee.component.html',
    
})
export class AdditionalFeeComponent implements OnInit {
    fees: Array<any>;

  constructor() {
    this.fees = [
        {
            "name": "Standard Room",
            "price": 3000000,
            "updated_at": "2023-11-05T16:23:12.000000Z",
            "created_at": "2023-11-05T16:23:12.000000Z",
            "id": 1
        }
    ];
  }

  ngOnInit(): void {}
}
