import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  
  public searchTerm: string = "";

  constructor(public test:AppComponent,public api:RestService) { }

  ngOnInit() {
  }
  public items =[
    {name:'test'},
    {name:'testing'},
    {name:'value'},
    {name:'sam'}
  ];

  setFilteredItems(){
  console.log(this.searchTerm);
  console.log(this.api.tester().source)
  //this.test.test();
  }


}
