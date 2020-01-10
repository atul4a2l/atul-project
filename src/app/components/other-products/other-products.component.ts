import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.scss']
})
export class OtherProductsComponent implements OnInit {
  otherProducts:Array<any>=[]
  constructor(public httpService: HttpService) { }
  
  getotherProducts(){
    this.httpService.products().subscribe(response=>{
      for (var key in response) {
        if (response.hasOwnProperty(key)) {
          console.log(key)
          let val = response[key];
          if(val.hub!=='general')
          this.otherProducts.push(val)
        }
      }
    })
  }

  ngOnInit() {
    this.getotherProducts();
  }

}
