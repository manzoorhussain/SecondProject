import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
    @Output() serverCreated=new EventEmitter<{serverName:string,serverContent}>();
    @Output()  bluePrintCreated=new EventEmitter<{serverName:string,serverContent}>();
    newServerName='';
    newServerContent='';

    constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){

      this.serverCreated.emit({
          serverName :this.newServerName,
          serverContent:this.newServerContent
      }

      );
  }

  onBlueServer(){
       this.bluePrintCreated.emit({
          serverName :this.newServerName,
          serverContent:this.newServerContent
      }

      );

  }
}
