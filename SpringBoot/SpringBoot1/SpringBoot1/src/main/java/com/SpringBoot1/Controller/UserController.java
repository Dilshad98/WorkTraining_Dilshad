package com.SpringBoot1.Controller;

import com.SpringBoot1.Model.UserModel;
import com.SpringBoot1.Request.CalClass;
import com.SpringBoot1.Request.LoginUserRequest;
import com.SpringBoot1.Response.GeneralResponse;
import com.SpringBoot1.Response.UserResponse;
import com.SpringBoot1.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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

    @PostMapping("userLoginParm")
    public ResponseEntity<?> userLogin(@RequestParam String email,
                                       @RequestParam String password){

        GeneralResponse response = new GeneralResponse();
        if(email.equals("") || password.equals("")){
            response.setMessage("Empty Params, Please Fill up!!");
            return ResponseEntity.badRequest().body(response);
        }
        else{
            response.setMessage("Login Successful");
            return ResponseEntity.ok(response);
        }
    }
    @Autowired
    UserService userService;
    @GetMapping("getOneUser/{id}")
    public ResponseEntity<?> getOneUser(@PathVariable int id){
       return userService.getOneUser(id);
    }

    @PostMapping("Login")
    public ResponseEntity<?> Login(@RequestBody LoginUserRequest loginUserRequest) {
        HashMap<Integer, UserModel> userHashMap = userService.UserGet();

        ArrayList<UserModel> userList = new ArrayList<UserModel>();

        UserResponse response = new UserResponse();

        boolean LoginStatus = false;


        for(Integer id : userHashMap.keySet()){

            userList.add(userHashMap.get(id));


        }

        for(UserModel user : userList){
            System.out.println(user.getEmail() );
            System.out.println(loginUserRequest.getEmail() );
            System.out.println(user.getPassword());
            System.out.println(loginUserRequest.getPassword() );
            if(loginUserRequest.getEmail().equals(user.getEmail()) && loginUserRequest.getPassword().equals(user.getPassword())){
                LoginStatus = true;
                break;
            }

        }
        if(LoginStatus == true){
            response.setMessage("Login Successful");
            return ResponseEntity.ok(response);
        }else{
            response.setMessage("Invalid Login!!");
            return ResponseEntity.badRequest().body(response);
        }

    }

    @PostMapping("Register")
    public ResponseEntity<?> register(@RequestBody LoginUserRequest loginUserRequest){
        GeneralResponse response = new GeneralResponse();
        try{
            userService.createUser(loginUserRequest);
            response.setMessage("Resgistration Successful");
            return ResponseEntity.ok(response);
        }catch(Exception e){
            response.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @PostMapping("LoginUser")
    public ResponseEntity<?> loginUsr (@RequestBody LoginUserRequest loginUserRequest){
        GeneralResponse response = new GeneralResponse();
        try{
            UserModel user = userService.validateLogin(loginUserRequest.getEmail() , loginUserRequest.getPassword());
            return ResponseEntity.ok(user);
        }
        catch(Exception e){
            response.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }


//    @PostMapping("tokenCheck")
//    public ResponseEntity<?> tokenCheck( @RequestHeader String token,@RequestHeader String id){
//        try{
//            System.out.println("Token: "+token+"\nid:"+id);
//            return ResponseEntity.ok(token);
//        }catch (Exception e){
//            GeneralResponse response = new GeneralResponse();
//            response.setMessage(e.getMessage());
//            return ResponseEntity.badRequest().body(response);
//        }
//    }
    @GetMapping("ViewUser")
    public ResponseEntity<?> ViewUser(){
        try{
            List<UserModel> userList = userService.viewUser();
            return ResponseEntity.ok(userList);
        }
        catch(Exception e){
            GeneralResponse response = new GeneralResponse();
            response.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("ViewUser/{id}")
    public ResponseEntity<?> ViewUserbyId(@PathVariable Integer id) {
        try{
            UserModel lis = userService.viewUser(id);
            return ResponseEntity.ok(lis);
        }
        catch(Exception e){
            GeneralResponse response = new GeneralResponse();
            response.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }
    @PostMapping("user/update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Integer id,
                                        @RequestBody LoginUserRequest loginUserRequest){
        GeneralResponse response = new GeneralResponse();
        try{
            userService.updateUser(id,loginUserRequest);

            response.setMessage("User id : "+id +" Info  Updated!!");
            return ResponseEntity.ok(response);
        }
        catch(Exception e){
            response.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }



    }

    @PostMapping("user/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Integer id){
        GeneralResponse response = new GeneralResponse();
        try{
            userService.deleteUser(id);
            response.setMessage("User is deleted");
            return ResponseEntity.ok(response);
        }catch (Exception e){
            response.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }

    }

    @PostMapping("logout/{id}")
    public ResponseEntity<?> ViewUser(@PathVariable Integer id){
        GeneralResponse  response = new GeneralResponse();
        try{
            System.out.println("id: "+id);
            userService.logout(id);
            response.setMessage("Logout Successfully");
            return ResponseEntity.ok(response);
        }catch (Exception e){
            response.setMessage(e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }


}
