import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({
    providedIn: 'root'
  })
export class ConstantService {
    currentUser: string;
    constructor(){
    };


}
