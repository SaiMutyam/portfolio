import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  portfolios: Portfolio[] = [];

   /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/

  constructor(public portfolioService: PortfolioService) { }

  /**
   * Write code on Method
   *
   * @return response()
   */

  ngOnInit(): void {
    this.portfolioService.getAll().subscribe((data: Portfolio[])=>{
      this.portfolios = data;
      console.log(this.portfolios);
    })
  }
  onNavigate(url: string){
    window.open(url, '_blank');
}
  /**
   * Write code on Method
   *
   * @return response()
   */

}
