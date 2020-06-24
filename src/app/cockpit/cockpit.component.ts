import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

     @Output() onServerCreated=new EventEmitter<{name:string,content:string}>();
     @Output() onBluePrintCreated=new EventEmitter<{name:string,content:string}>()

  constructor() { }

  ngOnInit(): void {
  }


  newServerName='';
  newServerContent='';



   onAddServer(){

    this.onServerCreated.emit(
      {
        name:this.newServerName,
        content:this.newServerContent
      }
      );


   }

   onAddBlurPrint(){

      this.onBluePrintCreated.emit(
      {
        name:this.newServerName,
        content:this.newServerContent
      }
      );


   }

}
