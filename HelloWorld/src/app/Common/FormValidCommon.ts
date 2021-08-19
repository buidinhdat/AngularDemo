export class FormValidCommon{
  constructor(){}
  static  validNumber(input:any):boolean{
    if(isNaN(input)){
      return false
    }
    return true;
  }

  static validIsNull(input:any):boolean{
    if (input ==undefined || input ==null ||input==""){
      return false;
    }
    return true;
  }

  static validMinlength(data:string,minLength:number):boolean{
    if(data.length<minLength){
      return false;
    }
    return true;
  }

  static validMaxlength(data:string,maxLength:number):boolean{
    if(data.length>maxLength){
      return false;
    }
    return true;
  }

  static validFormatEmail(data:string):boolean{
        var regx = /\S+@\S+\.\S+/;
        return regx.test(data);
  }

  static focusFeild(feildId:string):void{
   document.getElementById(feildId)?.focus();
  }
}
