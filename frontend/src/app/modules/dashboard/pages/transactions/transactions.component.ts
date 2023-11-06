import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-transaction',
    templateUrl: './transactions.component.html',
    
})
export class TransactionComponent implements OnInit {
    transactions: Array<any>;

  constructor() {
    this.transactions = [
        {
            "code": "TRX-23",
            "user_id": "Budi",
            "date": "23/02/2023",
            "room_id": "Ruangan 1",
            "status": "Berhasil",
            "room_price": "200000",
            "additional_fee_id":"Makaan Snack",
            "updated_at": "2023-11-05T16:23:12.000000Z",
            "created_at": "2023-11-05T16:23:12.000000Z",
            "id": 1
        }
    ];
  }

  ngOnInit(): void {}
}
