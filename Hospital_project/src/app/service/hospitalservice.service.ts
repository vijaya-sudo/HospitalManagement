import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { IDoctor } from "../model/iDoctor";
import { IPatient } from "../model/iPatient";


Injectable({
    providedIn: 'root'
})
export class HospitalserviceService{

    private serverUrl:string = 'http://localhost:8087';
    constructor(private httpClient:HttpClient){
        
    }

    public handleError(error:HttpErrorResponse){
        let errorMessage:string='';
        if(error.error instanceof ErrorEvent){
            errorMessage = 'Error : $(error.error.message)';
        }
        else {
            errorMessage = 'status : ${error.status}';
        }
         return throwError(() => errorMessage);
    }

    public getAllDoctors(): Observable<IDoctor[]>{
        let dataUrl:string = 'http://localhost:8087/doctors';
        return this.httpClient.get<IDoctor[]>(dataUrl).pipe(catchError(this.handleError));


    }
    //get doctor by name
    public getDoctor(name:string):Observable<IDoctor>{
        let dataUrl:string = '$ {this.serveUrl}/doctors/doctor/${name}';
        return this.httpClient.get<IDoctor>(dataUrl).pipe(catchError(this.handleError));

    }
    //create doctor
    public createDoctor(Dgroup:IDoctor):Observable<IDoctor>{
        let dataUrl:string = '$ {this.serveUrl}/doctors/doctor';
        return this.httpClient.post<IDoctor>(dataUrl,Dgroup).pipe(catchError(this.handleError));

    }
    //get patient by id
    public getPatient(patient_id:number):Observable<IDoctor>{
        let dataUrl:string = '$ {this.serveUrl}/patients/patient/${patient_id}';
        return this.httpClient.get<IDoctor>(dataUrl).pipe(catchError(this.handleError));

    }
    // Create Patient
    public CreatePatient(Pgroup:IPatient):Observable<IPatient>{
        let dataUrl:string = '$ {this.serveUrl}/patients/patient';
        return this.httpClient.post<IDoctor>(dataUrl,Pgroup).pipe(catchError(this.handleError));

    }
    


}