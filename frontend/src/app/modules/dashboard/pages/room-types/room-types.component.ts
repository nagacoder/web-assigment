import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard-room-types',
    templateUrl: './room-types.component.html',
    
})
export class RoomTypesComponent implements OnInit {
    roomTypes: Array<any>;

  constructor() {
    this.roomTypes = [
        {
            "name": "Medium Room 1",
            "updated_at": "2023-11-05T02:37:56.000000Z",
            "created_at": "2023-11-05T02:37:56.000000Z",
            "id": 1
        },
        {
            "name": "Medium Room 1",
            "updated_at": "2023-11-05T02:37:56.000000Z",
            "created_at": "2023-11-05T02:37:56.000000Z",
            "id": 1
        },
        {
            "name": "Medium Room 1",
            "updated_at": "2023-11-05T02:37:56.000000Z",
            "created_at": "2023-11-05T02:37:56.000000Z",
            "id": 1
        },
        {
            "name": "Medium Room 1",
            "updated_at": "2023-11-05T02:37:56.000000Z",
            "created_at": "2023-11-05T02:37:56.000000Z",
            "id": 1
        },
        {
            "name": "Medium Room 1",
            "updated_at": "2023-11-05T02:37:56.000000Z",
            "created_at": "2023-11-05T02:37:56.000000Z",
            "id": 1
        }
    ];
  }

  ngOnInit(): void {}
}
