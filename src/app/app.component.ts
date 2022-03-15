import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { config } from './config';
import { RedirectUriComponent } from './redirect-uri/redirect-uri.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHubAuth';
  Url_return!: string;
  ApiData!: any;
  constructor(private Api: ServiceService) {
  }
  ngOnInit() { }

  Githublogin() {
    this.Api.GitHubSignin().subscribe(data => {
      window.location.href = data.url;
    })
  }
}