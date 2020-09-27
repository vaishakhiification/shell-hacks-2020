import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({
    providedIn: 'root'
  })
export class ConstantService {
    currentUser: User;
    constructor(){
        this.currentUser = {
            city:"Irvine",
            country: "USA",
            email: "anjanak1@uci.edu",
            firstName: "Anjana",
            lastName: "Krishnakumar",
            latitude: 33.647,
            longitude: -117.915,
            password:"abc1234",
            phoneNumber: "949-561-7353",
            state: "CA",
            streetName: "3801 Parkview Lane",
            unitName: "17C",
            zip: "92612",
            userName: "anjanak1"
        }
    };


}
