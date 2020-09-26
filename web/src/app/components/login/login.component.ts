import { Component, OnInit } from '@angular/core';
import {User} from "../../models";
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Credentials} from "../../models/Credentials";
import {Observable} from "rxjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  credentials:Credentials;
  users$: Observable<User>;

  constructor(private dataService:DataService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
    this.credentials = new Credentials();
  }

  onSubmit() {
    console.log(this.credentials.password);
    this.users$ = this.dataService.getUser(this.credentials.password,this.credentials.userName);
    console.log(this.user.city);
  }


  ngOnInit(): void {
  }

}
