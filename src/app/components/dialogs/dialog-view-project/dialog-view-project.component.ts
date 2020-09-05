import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-view-project',
  templateUrl: './dialog-view-project.component.html',
  styleUrls: ['./dialog-view-project.component.scss']
})
export class DialogViewProjectComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
