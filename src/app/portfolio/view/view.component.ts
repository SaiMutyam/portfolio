import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { PortfolioService } from '../portfolio.service';

import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id!: any;
  portfolio!: Portfolio;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/

  constructor(
    public portfolioService: PortfolioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

   /**
   * Write code on Method
   *
   * @return response()
   */

  ngOnInit(): void {

    this.id = this.route.snapshot.params['portfolioid'];

    this.portfolioService.find(this.id).subscribe((data: Portfolio)=>{
      this.portfolio = data;
    });
  }

}
