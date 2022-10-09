package com.SpringBoot1.Response;

public class GeneralResponse {
    String message;

    public String getMessage(){
       return message;
    }
    public void setMessage(String message){
        this.message = message;
    }

    public GeneralResponse (String message){
        this.message = message;
    }

    public GeneralResponse (){
        this.message = message;
    }
}
