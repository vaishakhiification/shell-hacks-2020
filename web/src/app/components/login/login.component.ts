import { Component, OnInit } from '@angular/core';
import {User} from "../../models";
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Credentials} from "../../models/Credentials";
import { ConstantService } from 'src/app/services/constant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  credentials:Credentials;

  constructor(private dataService:DataService, private route: ActivatedRoute, private router: Router,private constantService: ConstantService) {
    this.credentials = new Credentials();
  }

  onSubmit() {
    this.dataService.getUser(this.credentials.password,this.credentials.userName).subscribe(res => {
      this.user = res;
      if(this.user!=null){
        this.constantService.currentUser = this.user.userName;
        this.router.navigate(['/search']);
      }

    });
  }


  ngOnInit(): void {
  }

}
