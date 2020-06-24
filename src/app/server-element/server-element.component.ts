import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

    @Input() elements={name:'',content:'',type:'server'};
    constructor() { }

  ngOnInit(): void {
  }




}
