import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecondProject';

  serverElement=[{name:'Server Name',content:'This is server content'}];

  onServerAdded(serverData:{serverName:string,serverContent}){

    this.serverElement.push({name:serverData.serverName,content:serverData.serverContent });
  }


  onBlueprintAdded(blueprintData:{serverName:string,serverContent}){

   this.serverElement.push({name:blueprintData.serverName,content:blueprintData.serverContent });
  }
}

