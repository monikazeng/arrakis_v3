package com.db.grad.javaapi.repository;

import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.model.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security,Integer> {
//    @Query(nativeQuery = true, value = "select * from Security where Status = active")
//    List<Security> findActiveBonds;
    @Query(nativeQuery = true, value ="select issuer from Security where ID= :id")
    List<Security> findIssuerfromBondID(Integer id);



}
