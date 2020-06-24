import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

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
