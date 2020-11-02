import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular/';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  providers: [NavParams]
})
export class ContactPage implements OnInit {

    data =[];

  constructor(public navParams:NavParams,public navCrtl:NavController,private router:Router, private activatedRoute:ActivatedRoute) { 

    //console.log(this.router.getCurrentNavigation().extras.state.data);
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(res);
    });
//console.log(this.data);
  }
  


  ngOnInit() {
  }

}
