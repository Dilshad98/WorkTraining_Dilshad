package com.Spring_Boot_Cloud.service1;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.circuitbreaker.CircuitBreaker;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("SERVICE1")
public class SampController {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    private CircuitBreakerFactory circuitBreakerFactory;

    @GetMapping("sampleget")
    public String callApi(){
        String res = restTemplate.getForObject("http://localhost:8082/sampleApi",String.class);
        System.out.println("Another service res is "+ res);
        return "ok";
    }


    private String getErrorSucessMsg() {
        return "Error occured with success message !!!";
    }

    @GetMapping("/CircuitBreaker")
    public String circuitBreakerMeth() {
        CircuitBreaker circuitBreaker = circuitBreakerFactory.create("circuitebreaker");
        //String url = "https://jsonplaceholder.typicode.com/albums";
        String url = "https://hellowWorld.url";

        return circuitBreaker.run(() -> restTemplate.getForObject(url, String.class), throwable -> getErrorSucessMsg());
    }


}