import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public welcome="XIN CHÀO CÁC BẠN !";

  public fullName="Bùi Đình Đạt";
  constructor() { }

  ngOnInit(): void {
  }

  public SayHello():void{
    alert("Hello "+ this.fullName);
  }

}
