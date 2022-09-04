
import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import{IDoctor} from  '../model/iDoctor';
import {HospitalserviceService} from '../service/hospitalservice.service';


@Component({
    selector:'app-showdoctor',
    templateUrl:'./showdoctor.component.html',
    styleUrls: ['./showdoctor.component.css']
})

export class ShowdoctorComponent implements OnInit{

    public doctor:IDoctor[]= [];
    public errorMessage:string | null = null;
    public name:string | null = null;
    public doc:IDoctor={} as IDoctor;


    constructor(private  service: HospitalserviceService, private activatedRoute:ActivatedRoute){ }
    ngOnInit(): void {
        this.service.getAllDoctors().subscribe({
            next:(data:any) =>{
                this.doctor= data;
            }
        })
        
    }
    showDoctorDetails(){
        if(this.doc.name){
            console.warn(this.doc.name);
        this.service.getDoctor(this.doc.name).subscribe({
            next:(data:any)=>{
                console.warn(data);
                this.doc=data;
            },
            error:(e:any)=>{
                this.errorMessage=e;
            }
        })
    }
}
}
