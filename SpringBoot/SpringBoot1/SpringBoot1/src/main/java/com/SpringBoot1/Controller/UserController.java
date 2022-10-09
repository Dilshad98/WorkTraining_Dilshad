package com.SpringBoot1.Controller;

import com.SpringBoot1.Request.CalClass;
import com.SpringBoot1.Request.LoginUserRequest;
import com.SpringBoot1.Response.GeneralResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class UserController {

    @PostMapping("calculation")
    public ResponseEntity<?> Cal(@RequestBody CalClass calClass){
        GeneralResponse response = new GeneralResponse();
        if(calClass.getType().equals("Addition")){
            int cal  = calClass.getNum1()+ calClass.getNum2();
            response.setMessage("result is : "+cal);
            return ResponseEntity.ok(response);

        }
       else if(calClass.getType().equals("Substraction")){
            int cal  = calClass.getNum1() - calClass.getNum2();
            response.setMessage("result is : "+cal);
            return ResponseEntity.ok(response);

       }
       else if (calClass.getType().equals("Multiplication")) {
            int cal  = calClass.getNum1() * calClass.getNum2();
            response.setMessage("result is : "+cal);
            return ResponseEntity.ok(response);

       }
       else if(calClass.getType().equals("Division")){
            int cal  = calClass.getNum1() / calClass.getNum2();
            response.setMessage("result is : "+cal);
            return ResponseEntity.ok(response);

        }else{
           response.setMessage("wrong type of");
            return ResponseEntity.badRequest().body(response);//400 status code
        }



    }

    @PostMapping("loginUser")
    public ResponseEntity<?>  loginUser(@RequestBody LoginUserRequest loginUserRequest){
        ArrayList<LoginUserRequest> userList = new ArrayList<LoginUserRequest>();

        LoginUserRequest user1 = new LoginUserRequest("John34@gmail.com","J123456*");
        LoginUserRequest user2 = new LoginUserRequest("Bob55@gmail.com","B123456*");
        LoginUserRequest user3 = new LoginUserRequest("Aashik22@gmail.com","A123456*");
        LoginUserRequest user4 = new LoginUserRequest("Yaasin89@gmail.com","Y123456*");
        LoginUserRequest user5 = new LoginUserRequest("Michael56@gmail.com","M123456*");

        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        userList.add(user4);
        userList.add(user5);

        GeneralResponse response = new GeneralResponse();
        boolean LoginStatus = false;
        for(LoginUserRequest us : userList){

            if(loginUserRequest.getEmail().equals(us.getEmail()) && loginUserRequest.getPassword().equals(us.getPassword())){
                response.setMessage("Login Successful");
                LoginStatus = true;
                break;


            }
            else{

                LoginStatus = false;
                response.setMessage("Invalid email or password");

            }
        }

        if(LoginStatus == true){
            return ResponseEntity.ok(response);
        }else{
            return ResponseEntity.badRequest().body(response);
        }


    }
    @GetMapping("getUser")
    public ArrayList<LoginUserRequest> getUser() {
        ArrayList<LoginUserRequest> userList = new ArrayList<LoginUserRequest>();

        LoginUserRequest user1 = new LoginUserRequest("John34@gmail.com","John Lee","blk 123 rainbow road #12-77 S(623123)");
        LoginUserRequest user2 = new LoginUserRequest("Bob55@gmail.com","Bob Martin","blk 144 sunshine road #19-56 S(623144)");
        LoginUserRequest user3 = new LoginUserRequest("Aashik22@gmail.com","Aashik Mishak","blk 156 ring road #19-54 S(671156)");
        LoginUserRequest user4 = new LoginUserRequest("Yaasin89@gmail.com","Mohamed Yaasin","blk 149 nutella road #31-36 S(623149)");
        LoginUserRequest user5 = new LoginUserRequest("Michael56@gmail.com","Michael Lim","blk 173 rain road #33-77 S(623173)");

        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        userList.add(user4);
        userList.add(user5);

        if(userList.size()>0){
            return userList;
        }
        else{
            return null;
        }
    }
}
