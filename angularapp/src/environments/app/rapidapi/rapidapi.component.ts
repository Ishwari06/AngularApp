import { Component, OnInit } from '@angular/core';
//import { RapidapiService } from '../services/rapidapi.service';


@Component({
    selector: 'app-rapidapi',
    templateUrl: './rapidapi.component.html',
    styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {
    obj = [];
    rapidapiService: any;

    //constructor(private rapidapiService: RapidapiService) { }

    ngOnInit() {
    
  this.rapidapiService.GetYahooFinance().subscribe(res => {
        console.log('from rapid api', res);
        this.obj = res.news;
    })
}
//GetMarketData() {
   // this.rapidapiService.getDataFormMarket('uS','AMD').subscribe(res => {
      //  console.log('rapid market data', res);
  //  })
}

//getMovers() {
    //this.rapidapiService.getMovers().subscribe(res => {
        //console.log('get movers', res);
//     })
// }


