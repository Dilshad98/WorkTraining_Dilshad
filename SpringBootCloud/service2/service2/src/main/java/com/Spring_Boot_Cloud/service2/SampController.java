package com.Spring_Boot_Cloud.service2;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("SERVICE2")
public class SampController {
    @GetMapping("sampleApi")
    public String getName(){
        return "Sample Response from client 2";
    }
}
