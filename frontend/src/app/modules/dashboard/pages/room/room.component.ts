import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-room',
    templateUrl: './room.component.html',
    
})
export class RoomComponent implements OnInit {
    rooms: Array<any>;

  constructor() {
    this.rooms = [
        {
            "name": "Standard Room",
            "area": "Bandung",
            "price": 3000000,
            "facility": "Ac,TV",
            "room_types_id": 1,
            "updated_at": "2023-11-05T16:23:12.000000Z",
            "created_at": "2023-11-05T16:23:12.000000Z",
            "id": 1
        }
    ];
  }

  ngOnInit(): void {}
}
