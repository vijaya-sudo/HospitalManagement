import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router';
import { IPatient } from "../model/iPatient";
import {HospitalserviceService} from '../service/hospitalservice.service';


@Component({
    selector:'app-showpatient',
    templateUrl:'./showpatient.component.html',
    styleUrls: ['./showpatient.component.css']
})

export class ShowpatientComponent implements OnInit{


    public errorMessage:string| null = null;
    public id:number | null = null;
    public patient:IPatient={} as IPatient;


    constructor(private  service: HospitalserviceService, private router:Router){ }
    ngOnInit(): void {
            }
    
    showPatientInfo(){
        if(this.id==null){
        }
        else if(this.id){
        this.service.getPatient(this.id).subscribe({
            next:(data:any)=>{
                
                this.patient=data;
            },
            error:(e:any)=>{
                this.errorMessage="No such patient there in  the database";
                alert(this.errorMessage);
            }
        });
    }
}
}
