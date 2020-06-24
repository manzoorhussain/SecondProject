import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'SecondProject';
    @Input() serverElements=[{name:'Apache Tomcat',content:'It,s use for web development',type:'server'}];


  onAddServer(serverData: { name: string; content: string }){

  this.serverElements.push({
    name:serverData.name,
    content:serverData.content,
    type:'server'

  });
}

  onBlueprintAdded(bluePrintData: { name: string; content: string }){
   this.serverElements.push({
    name:bluePrintData.name,
    content:bluePrintData.content,
      type:'blueprint'

  });

}

}

