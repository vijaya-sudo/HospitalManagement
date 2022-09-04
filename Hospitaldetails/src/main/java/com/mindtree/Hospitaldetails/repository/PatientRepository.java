package com.mindtree.Hospitaldetails.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mindtree.Hospitaldetails.entity.Patient;

@Repository
public interface PatientRepository  extends CrudRepository<Patient, Integer>{

}
