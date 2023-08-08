package com.db.grad.javaapi.repository;

//import com.db.grad.javaapi.model.Dog;
import com.db.grad.javaapi.model.Security;
import com.db.grad.javaapi.model.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security,Integer> {

    /* mvp 1.0 story 1
        In order to view the portfolio as a user I want to see all the bonds active in the system
     */
    @Query(nativeQuery = true, value = "SELECT * FROM Security WHERE Status = 'active'")
    List<Security> findActiveBonds();


    @Query(nativeQuery = true, value = "SELECT * FROM Trade t JOIN Security s ON t.trade_id = security_id WHERE s.issuer_name = :issuer")
    List<Security> findIssuer(String issuer);


    /*  mvp 1.0 story 2
        In order to provide optics on positions,
        as a user I want to be able to view Bonds due for maturity within the last and next 5 days
     */
//    @Query(nativeQuery = true, value = "SELECT * FROM SECURITY WHERE MATURITY_DATE BETWEEN DATEADD('DAY', -5, '2021-08-05') AND DATEADD('DAY', 5, '2021-08-05')")
    @Query(nativeQuery = true, value = "SELECT * FROM SECURITY WHERE MATURITY_DATE BETWEEN DATEADD('DAY', -5, CURRENT_DATE()) AND DATEADD('DAY', 5, CURRENT_DATE())")
    List<Security> find5DaysBonds();


    /*  mvp 1.0 story 4
    In order to be able to uniquely identify bond trades,
    as a user I want to be able to see a Bond’s ISIN and CUSIP code
     */
    @Query(nativeQuery = true, value = "SELECT * FROM Security s WHERE s.security_id = :trade_id")
    List<Security> identifyIsinCusip(int trade_id);


    /* mvp 1.0 story 5
        In order to identify the issuer of the bond, as a user I want to be able to see the issuer of the bond
     */
//    @Query(nativeQuery = true, value = "SELECT DISTINCT SECURITY_ID, ISSUER_NAME FROM SECURITY WHERE CUSIP = :cusip")
    @Query(nativeQuery = true, value = "SELECT DISTINCT * FROM SECURITY WHERE CUSIP = :cusip")
    List<Security> getByCusip(String cusip);

    /* mvp 1.0 story 8
        In order to understand the security, as a user I want to be able to see the details of individual bonds
     */
    @Query(nativeQuery = true, value = "SELECT * FROM Security WHERE issuer_name = :issuer")
    List<Security> bondDetails(String issuer);


}
