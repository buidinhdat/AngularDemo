import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonConstants } from '../Common/CommonConstants';

export class TestService{
  constructor(public http:HttpClient){
  }

  public  getCustomer = (data:any,callback:any) => {
    this.http.post(this.createUrl("/customer/getCustomerByData"),data,{ headers: new HttpHeaders()}).toPromise().then(callback,(error)=>{
    console.log("ERROR:" + error);
    CommonConstants.hideLoading();
    CommonConstants.showAlert(error.status+": "+error.message);
  });
}

public  getCustomerLazy = (data:any,callback:any) => {

  this.http.post(this.createUrl("/customer/getCustomerByDataLazy"),data,{ headers: new HttpHeaders()}).toPromise().then(callback,(error)=>{
  console.log("ERROR:" + error);
  CommonConstants.hideLoading();
  CommonConstants.showAlert(error.status+": "+error.message);
});
}

  public createUrl=(url:string):string=>{
    return CommonConstants.API_ADDRESS+url;
  }

}
