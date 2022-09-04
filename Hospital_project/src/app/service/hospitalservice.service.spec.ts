import { TestBed} from '@angular/core/testing';
import { HospitalserviceService}  from './hospitalservice.service';

describe(' HospitalserviceService', ( ) =>{
    let Service: HospitalserviceService;

    beforeEach(async () =>{
        TestBed.configureTestingModule({});
        Service = TestBed.inject( HospitalserviceService);
            
        });

    it('should  be created', () =>{
        expect(Service).toBeTruthy();
    });
});


