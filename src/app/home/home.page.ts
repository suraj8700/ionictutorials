import { Component } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormBuilder, FormGroup, Validator, Validators,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    tasklist:any = [];
    taskName:string = "";
    beta:any = [];
    testForm:FormGroup;
   
  constructor(public navctrl:NavController,public alertctrl:AlertController,public router:Router, public formBuilder: FormBuilder,public http:HttpClient) {
    this.testForm =this.formBuilder.group({
      taskName:new FormControl( '',Validators.compose( [Validators.required,Validators.minLength(10)])),
      name:['',Validators.required],
      address:['',Validators.required],
      lastname:['',Validators.required],
     
      description:["this is desc"]
    });
  }

  addTask(){

    if(!this.testForm.valid){
      console.log(this.testForm);
  } 
  else {
    alert('ssss');
  }
    if(this.taskName.length>0){

      

        
      
      //alert(this.taskName);
      let task =this.taskName;
      this.tasklist.push(task);
      console.log(this.tasklist);
    // this.navctrl.navigateForward('contact',{state:{data:this.taskName}});
      this.taskName ="";
    }
  }

  async editNote(index){

    let t= this.tasklist[index];
    console.log(t);
    this.taskName =t;
  // return false;
    let alert = await this.alertctrl.create({
      header:"alert",
      subHeader:"alert subhead",
      inputs:[{name:'editTask',type:'text',placeholder:'new value',value:this.tasklist[index]}],
      message:" i am deleteing index"+index,
      buttons:[{text:'Cancel',role:'cancel'},{text:'updates',handler:data=>{
        this.tasklist[index] = data.editTask;
      }}]
     
    });

    let alert2 = await this.alertctrl.create({
      header:"new alert",
      subHeader:"sub alert",
      inputs:[{name:"await",type:'text',value:'this si a val'}],
      message:"thi is a great",
      buttons:[{
        text:'cancel',role:'cancel'
      },
      {
        text:'update',
        handler:data=>{
          this.tasklist[index] = data.await;
        }
      }
    ]
    });
    await alert.present(); 
    //await alert2.present();
  }

  deleteNote(index){
    alert("delete");
    this.tasklist.splice(index,1);
  }

  sendData(){
      console.log(this.beta);
    this.router.navigate(['contact'],{queryParams:this.beta});
  }

    public testApi(): Observable<object> {
      const urlchk = "https://jsonplaceholder.typicode.com/to1dos"; 
      return this.http.get(urlchk);
    }
    apidata:any;
    error:any;

    ionViewWillEnter(){
      alert('ss');
      this.testApi().subscribe(data=>{
        this.apidata = data;
      }),
       err=>{
         this.error = 'an error occured Status : $(err.status),Message : $(err.statusText) ';
       } 
      ;
    }

}
