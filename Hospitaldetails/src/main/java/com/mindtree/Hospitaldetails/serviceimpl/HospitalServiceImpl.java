package com.mindtree.Hospitaldetails.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.mindtree.Hospitaldetails.entity.Doctor;
import com.mindtree.Hospitaldetails.entity.Patient;
import com.mindtree.Hospitaldetails.repository.DoctorRepository;
import com.mindtree.Hospitaldetails.repository.PatientRepository;
import com.mindtree.Hospitaldetails.service.HospitalService;

public class HospitalServiceImpl implements HospitalService {
    
	@Autowired
	DoctorRepository doctorRepository;
	@Autowired
	PatientRepository patientRepository;
	@Override
	public Doctor showDoctorInformation(String name) {
		// TODO Auto-generated method stub
		return  doctorRepository.findByName(name);
	}
	@Override
	public Patient showPatientInformation(Integer Id) {
		// TODO Auto-generated method stub
		return patientRepository.findById(Id).get();
	}
	@Override
	public boolean saveDoctorInformation(Doctor doctor) {
		// TODO Auto-generated method stub
		doctorRepository.save(doctor);
		
		return true;
	}
	@Override
	public boolean savePatientInformatio(Patient patient) {
		// TODO Auto-generated method stub
		Doctor doctor = doctorRepository.findByName(patient.getDoctor_name());
		doctor.addPatients(patient);
		patientRepository.save(patient);
		doctor.setPatient_count(0);
		return true;
	}
	@Override
	public List<Patient> getPatientListOfDoctor(String name, Doctor doctor) {
		// TODO Auto-generated method stub
		return doctor.getPatients();
	}
	@Override
	public List<Doctor> getDoctors() {
		// TODO Auto-generated method stub
		return (List<Doctor>) doctorRepository.findAll();
	}
	

	

}
