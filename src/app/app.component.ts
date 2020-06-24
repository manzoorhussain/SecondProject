import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecondProject';

  serverElements=[];
  serverName='';
  serverContent='';
  serverType='';


   onAddServer(){
    console.log("Clcik")

     this.serverElements.push(
       {
         serverType:'server',
         name:this.serverName,
         content:this.serverContent
       }
       );

   }

   onAddBlurPrint(){

 this.serverElements.push(
   {
     serverType:'blueprint',
     name:this.serverName,
     content:this.serverContent
   });

   }
}

