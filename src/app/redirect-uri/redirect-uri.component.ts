import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { config } from '../config';


@Component({
  selector: 'app-redirect-uri',
  templateUrl: './redirect-uri.component.html',
  styleUrls: ['./redirect-uri.component.css']
})
export class RedirectUriComponent implements OnInit {
  code!: any;
  Demo!: any;
  constructor(private route: ActivatedRoute,
    private Token: ServiceService) {
    this.code = this.route.snapshot.queryParamMap.get("code")
    this.GetAccessTokenFunc(this.code)
    console.log(this.code)
  }

  ngOnInit(): void { }
  GetAccessTokenFunc(code: any) {
    this.Token.GetAccessToken(code, config.ClientID, config.ClientSceret).subscribe(Data => this.Demo = Data)
  }
}
