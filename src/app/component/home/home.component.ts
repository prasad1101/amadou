import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData = {
    userName : "",
    password : "",
    hostName : ""
  }
  constructor(private router : Router) { }

  ngOnInit() {
  }

validateLogin(userData){

if(userData.userName === ""){
  alert("please enter username")
  return false;
}
if(userData.password === ""){
  alert("please enter password")
  return false
}
  if (!userData.hostName) {
    alert("please select host")
    return false
  }
  return true
}

  login() {
if(!this.validateLogin(this.userData)) return;

    alert("Login successful!")
    this.router.navigateByUrl("report-types")
  }

}
