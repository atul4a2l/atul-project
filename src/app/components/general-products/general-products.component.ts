import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-general-products',
  templateUrl: './general-products.component.html',
  styleUrls: ['./general-products.component.scss']
})
export class GeneralProductsComponent implements OnInit {
  generalProducts:Array<any>=[];
  constructor(public httpService: HttpService) { }
  
  getGeneralProducts(){
    this.httpService.products().subscribe(response=>{
      for (var key in response) {
        if (response.hasOwnProperty(key)) {
          let val = response[key];
          if(val.hub==='general')
          this.generalProducts.push(val)
        }
      }
    })
  }

  ngOnInit() {
    this.getGeneralProducts()
  }

}
