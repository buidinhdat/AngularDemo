export class CommonConstants  {
  public static API_ADDRESS:string = "http://localhost:8003";




  public static showAlert(message:string):void{
    var span=document.getElementById("messageAlert");
    if(span!=null)
    {
      if(span.innerText!=null){
        span.innerText=message;
      }
    }
    var btnShow=document.getElementById("btnShowAlert");
    btnShow?.click();

}

public static showLoading():void{
  var btnShow=document.getElementById("btnShowLoading");
  btnShow?.click();

}

public static hideLoading():void{
console.log("hide")
  var btnHide=document.getElementById("btnHideLoading");
  btnHide?.click();
}



public static convertDDMMYYYY(dateDDMMYYYY:string) {
  return dateDDMMYYYY.split("-").reverse().join("/");

}


}
