import { Component, OnInit } from '@angular/core';
import { InsuranceServiceService } from '../service/insurance-service.service';
import { SearchRequest } from '../Class/search-request';
import { SearchResponse } from '../Class/search-response';
import { FormGroup, FormControl, Form, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-plans-data',
  templateUrl: './plans-data.component.html',
  styleUrls: ['./plans-data.component.css']
})
export class PlansDataComponent implements OnInit {

   req: SearchRequest = new SearchRequest;
   res : SearchResponse[]=[];

  constructor( private service:InsuranceServiceService
    ,private formBuilder : FormBuilder) {
  }

  searchFormGroup !:FormGroup;

public Name:string[]=[];
public  Status:string[]=[];
public searchplans: SearchResponse[]=[];



  ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group(
      {
        'planName' : new FormControl(''),
        'planStatus' : new FormControl('')
      } );
    this.planNames();
    this.planStatus();

  }


  planNames(){
    return this.service.getPlanNames().subscribe(data =>
      this.Name=data);

  }

  planStatus(){
    return this.service.getPlanStatus().subscribe(data=>
      this.Status=data);
  }

  plans( req:  SearchRequest){
    return this.service.search(req).subscribe( data => {
      this.searchplans = data;
  });
}

  exportpdf(){
    return this.service.getpdf().subscribe(data=>
      {let file = new Blob([data],{type:'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);}

      );
  }

  exportexcel(){
    return this.service.getexcel().subscribe(data=>
      {let file = new Blob([data],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);}
      );


}
dynamicqueryFn(formgroup :FormGroup){
  this.req = formgroup.value;
  if(this.req.planName == '-Select-'){
    this.req.planName='';
  }
  if(this.req.planStatus== '-Select-'){
    this.req.planStatus=''
  }

  this.service.search(this.req).subscribe(
    (    data: SearchResponse[]) => {this.res = data;});
}
}
