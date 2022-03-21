import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { config } from '../config';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-redirect-uri',
  templateUrl: './redirect-uri.component.html',
  styleUrls: ['./redirect-uri.component.css']
})
export class RedirectUriComponent implements OnInit {
  code!: any;
  Demo!: any;
  li: any;
  lis = [];
  Details?: any = {};
  SubObject!: string;

  constructor(private route: ActivatedRoute,
    private Token: ServiceService) {
    this.code = this.route.snapshot.queryParamMap.get("code")
   this.GetAccessTokenFunc(this.code)
    console.log(this.code)
  }

  ngOnInit(): void { }
  GetAccessTokenFunc(code: any) {
    this.Token.GetAccessToken(code, config.ClientID, config.ClientSceret).subscribe(Response => {

      this.User();
    });
  }

  User() {
    this.Token.UserToken().subscribe(data => {
      this.li = data;
      console.log(this.li)
      this.Details = this.li;
      localStorage.setItem("Data_Object", JSON.stringify(this.Details))
       this.Details = localStorage.getItem("Data_Object");
       let value = JSON.parse(this.Details)
       this.SubObject = value.LoginData.url;
       console.log(this.SubObject);

      console.log(data)
    })
  }

}
