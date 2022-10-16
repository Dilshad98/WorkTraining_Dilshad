package com.SpringBoot1.Config;

import com.SpringBoot1.Response.GeneralResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ComException {

    @ExceptionHandler(CusException.class)
    public ResponseEntity<?> handleException(CusException e){
        System.out.println("inside handle exception(ExceptionHandler) "+e.getMessage());
        GeneralResponse res = new GeneralResponse();
        res.setMessage(e.getMessage());
        return ResponseEntity.badRequest().body(res);
    }
}
