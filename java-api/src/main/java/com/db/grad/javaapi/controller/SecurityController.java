package com.db.grad.javaapi.controller;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import com.db.grad.javaapi.service.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@RestController
public class SecurityController {

    private SecurityService ss;

    @Autowired
    SecurityController (SecurityService ss){
        this.ss = ss;
    }

    @GetMapping("/security")
    public List<Security> getAllSecurities(){
        return ss.getAll();
    }

    @GetMapping("/security/{id}")
    public ResponseEntity<Security> getSecurityById(@PathVariable(value="id")int id)
            throws ResourceNotFoundException {
        Security securities = ss.getById(id);
        return ResponseEntity.ok().body(securities);
    }

    @GetMapping("/security/issuer/{issuer}")
    public ResponseEntity<List<Security>> getByIssuer(@PathVariable(value="issuer")String issuer)
            throws ResourceNotFoundException{
        List<Security> securities = ss.getByName(issuer);
        return ResponseEntity.ok().body(securities);
    }


    // mvp 1.0 story 1
    @GetMapping("/security/active")
    public ResponseEntity<List<Security>> getActiveBonds()
        throws ResourceNotFoundException{
        List<Security> securities = ss.getActive();
        return ResponseEntity.ok().body(securities);
    }

    // mvp 1.0 story 2
    @GetMapping("/security/date")
    public ResponseEntity<List<Security>> get5DaysBonds()
            throws ResourceNotFoundException{
        List<Security> securities = ss.get5DaysBonds();
        return ResponseEntity.ok().body(securities);
    }

    // mvp 1.0 story 4
    @GetMapping("/security/trade_id/{id}")
    public ResponseEntity<List<Security>> identifyIsinCusip(@PathVariable(value="id")int id)
            throws ResourceNotFoundException{
        List<Security> securities = ss.identifyIsinCusip(id);
        return ResponseEntity.ok().body(securities);
    }

    @GetMapping("/security/cusip/{cusip}")
    public ResponseEntity<List<Security>> identifyissuer_Cusip(@PathVariable(value="cusip")String cusip)
            throws ResourceNotFoundException{
        List<Security> securities = ss.getByCusip(cusip);
        return ResponseEntity.ok().body(securities);
    }





//    @GetMapping("/security/date/{date}")
//    public ResponseEntity<List<Security>> get5DaysBonds(@PathVariable(value="date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
//                                                            LocalDateTime date)
//            throws ResourceNotFoundException{
////        LocalDateTime localDateTime = LocalDateTime.parse(date);
//        System.out.println("right here");
//        List<Security> securities = ss.get5DaysBonds(date);
//        return ResponseEntity.ok().body(securities);
//    }

//        @GetMapping("/security/date/{date}")
//        public ResponseEntity<List<Security>> get5DaysBonds(@PathVariable(value="date") String date)
//            throws ResourceNotFoundException{
//        LocalDate parsed_date = LocalDate.parse(date);
//        System.out.println(parsed_date);
//        System.out.println(parsed_date.getClass().getName());
//        List<Security> securities = ss.get5DaysBonds(parsed_date);
//        return ResponseEntity.ok().body(securities);
//    }



}
