import { Component, OnInit} from '@angular/core';

import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.css']
})
export class ApiViewComponent implements OnInit {

  posts = [];
  constructor( private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
   }

  ngOnInit() {
  }

}
