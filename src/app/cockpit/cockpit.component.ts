import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
   @Input() element= {name:'',content:''}

  constructor() { }

  ngOnInit(): void {
  }

}
