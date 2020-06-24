import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'SecondProject';
    @Input() serverElements=[{name:'Apache Tomcat',content:'It,s use for web development'}];


  onAddServer(serverData:{serverName:string,serverContent:string}){
  this.serverElements.push({
    name:serverData.serverName,
    content:serverData.serverContent,

  });
}

  onBlueprintAdded(bluePrintData:{serverName:string,serverContent:string}){
   this.serverElements.push({
    name:bluePrintData.serverName,
    content:bluePrintData.serverContent,

  });

}

}

