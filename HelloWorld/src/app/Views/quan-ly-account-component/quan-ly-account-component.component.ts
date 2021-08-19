import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, VERSION } from '@angular/core';
import { CommonConstants } from 'src/app/Common/CommonConstants';
import { FormValidCommon } from 'src/app/Common/FormValidCommon';
import { TestService } from 'src/app/Services/TestService';
import { TableCommonConfig } from 'src/app/Common/TableCommonConfig';
import { Subject } from 'rxjs';
import { CustomerModel } from 'src/app/Models/CustomerModel';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-quan-ly-account-component',
  templateUrl: './quan-ly-account-component.component.html'
})
export class QuanLyAccountComponentComponent implements OnInit, OnDestroy {

  private testService: TestService = new TestService(this.http);

  customers: CustomerModel[]=[];
  selectedCustomers:CustomerModel[]=[];

  //sử dụng cho angular datatable jquery
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  // end   sử dụng cho angular datatable jquery


  public formSearch: any = {
    userName: "",
    email: "",
    phoneNumber: "",
    status: "",
    fromActiveDate: "",
    toActiveDate: ""
  };


  public errorFormSearch = { userName: '', email: '', phoneNumber: '', status: '', fromActiveDate: '', toActiveDate: '' };
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("onInit: " + VERSION.major);
    this.dtOptions = TableCommonConfig.dtOptions;
  }
  ngOnDestroy(): void {
    console.log("destroy");
    this.dtTrigger.unsubscribe();
  }

  public search(): void {
    console.log(this.formSearch);

    if(!this.validFormSearch()){
      return ;
    }else{
      //call API
      CommonConstants.showLoading();
      this.testService.getCustomer(this.formSearch, (response: any) => {
        CommonConstants.hideLoading();
        this.customers = response;
        this.dtTrigger.next();
        //this.dtTrigger.unsubscribe();
        console.log(response)
      })
    }
  }

  public validFormSearch(): boolean {
    /*
    this.errorFormSearch = { userName: '', email: '', phoneNumber: '', status: '', fromActiveDate: '', toActiveDate: '' };
    if (!FormValidCommon.validIsNull(this.formSearch.userName)) {
      this.errorFormSearch.userName = "userName is required";
      FormValidCommon.focusFeild("userName");
      return false;
    }
    if (!FormValidCommon.validIsNull(this.formSearch.phoneNumber)) {
      this.errorFormSearch.phoneNumber = "PhoneNumber is required";
      FormValidCommon.focusFeild("phoneNumber");
      return false;
    }
    if (!FormValidCommon.validNumber(this.formSearch.phoneNumber)) {
      this.errorFormSearch.phoneNumber = "PhoneNumber is not a number";
      FormValidCommon.focusFeild("phoneNumber");
      return false;
    }
    if (!FormValidCommon.validMinlength(this.formSearch.phoneNumber, 10)) {
      this.errorFormSearch.phoneNumber = "Minlength = 10"
      FormValidCommon.focusFeild("phoneNumber");
      return false;
    }
    if (!FormValidCommon.validMaxlength(this.formSearch.phoneNumber, 10)) {
      this.errorFormSearch.phoneNumber = "Maxlength = 10"
      FormValidCommon.focusFeild("phoneNumber");
      return false;
    }
    if (!FormValidCommon.validIsNull(this.formSearch.email)) {
      this.errorFormSearch.email = "email is required";
      FormValidCommon.focusFeild("email");
      return false;
    }
    if (!FormValidCommon.validFormatEmail(this.formSearch.email)) {
      this.errorFormSearch.email = "Email has incorrect format";
      FormValidCommon.focusFeild("email");
      return false;
    }
    if (!FormValidCommon.validIsNull(this.formSearch.status)) {
      this.errorFormSearch.status = "Status is  required";
      FormValidCommon.focusFeild("status");
      return false;
    } */
    return true;
  }


  //PRIMENG TABLE
  loading: boolean=false;
  clear(table: Table) {
    table.clear();
}


/* lazy loading */
  customerLoadingLazy:CustomerModel[]=[];
  pageSize:number[]=[5,10,15,20];
  quantityForPage:number=5;
  totalData:number=0;
  totalPage:number=1;
  nowPage:number=1;
  arrPage:number[]=[];

  loadLazyCustomer(pageNumber:number, next:boolean , previous:boolean) {
    if(this.nowPage==this.totalPage&&next==true) return;
    if(this.nowPage==1&&previous==true) return;
    if(!this.validFormSearch()){
        return;
    }else{
      //call API
      CommonConstants.showLoading();
      var data={
        userName: this.formSearch.userName,
        email: this.formSearch.email,
        phoneNumber: this.formSearch.phoneNumber,
        status: this.formSearch.status,
        fromActiveDate: this.formSearch.fromActiveDate,
        toActiveDate: this.formSearch.toActiveDate,
        pageNumber:pageNumber,
        quantityForPage:this.quantityForPage
      }
      this.testService.getCustomerLazy(data, (response: any) => {
        CommonConstants.hideLoading();
        this.arrPage=[];
        this.customerLoadingLazy = response.lstDataCustomer;
        this.totalData=response.totalData;
        this.totalPage=response.totalPage;
        this.nowPage=response.nowPage;
        for(var i =1; i<=this.totalPage;i++){
          this.arrPage.push(i);
        }
      })


    }

  }


}
