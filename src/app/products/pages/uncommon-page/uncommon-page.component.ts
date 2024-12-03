import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  public name:string="Fernando";
  public gender: "male" | "female" ="male";
  public invitationMap={
    "male":"invitarlo",
    "female": "invitarla"
  }


  changeClient():void{
    this.name="melisa";
    this.gender="female";
  }


  //i18nPlural
  public clients:string[] = ["Maria","Pedro","Marcos","Melisa","Paco"]
  public clientMap = {
    "=0":"no tenemos clientes ",
    "=1":"tenemos un cliente ",
    "other":"tenemos # clientes ",

  }

  deleteClient():void{
    this.clients.shift();
  }




  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value=> console.log("tap: ",value))
  );

  public promiseValue:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout( ()=> {
      resolve( "tenemos data en la promesa")
    },2000);
  })
}
