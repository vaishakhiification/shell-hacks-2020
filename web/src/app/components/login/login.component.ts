import { Component, OnInit } from '@angular/core';
import {User} from "../../models";
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Credentials} from "../../models/Credentials";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  credentials:Credentials;

  constructor(private dataService:DataService, private route: ActivatedRoute, private router: Router) {
    this.credentials = new Credentials();
  }

  onSubmit() {
    console.log(this.credentials.password)
    //TODO null check
    this.dataService.getUser(this.credentials.password,this.credentials.userName).subscribe(res => {
      this.user = res;
      console.log(this.user.city);
      this.router.navigate(['/search']);
    });
  }


  ngOnInit(): void {
  }

}
