package com.SpringBoot1.Service;

import com.SpringBoot1.Model.UserModel;
import com.SpringBoot1.Response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class UserService {
//    @Autowired
//    UserRepo userRepo;
//    public int addition(int a, int b){
//        return a+b;
//    }
//
////    public boolean createUser(){
////        UserModel = userModel = UserModel;
////        UserModel.setEma
////        userRepo.save(userModel)
////    }
    public HashMap<Integer, UserModel> UserGet(){
        HashMap<Integer,UserModel> userHashMap = new HashMap<>();

        UserModel user1 = new UserModel(1,"John34@gmail.com", "J123456*" ,"John Lee" );
        UserModel user2 = new UserModel(2,"Aashik@gmail.com", "A123456*" ,"Aashik Mishak" );
        UserModel user3 = new UserModel(3,"Yaasin89@gmail.com", "Y123456*" ,"Mohamed Yaasin" );
        UserModel user4 = new UserModel(4,"Michael56@gmail.com", "M123456*" ,"Michael Lim" );
        UserModel user5 = new UserModel(5,"Bob55@gmail.com", "B123456*" ,"Bob Martin" );

        userHashMap.put(1,user1);
        userHashMap.put(2,user2);
        userHashMap.put(3,user3);
        userHashMap.put(4,user4);
        userHashMap.put(5,user5);

        return userHashMap;
    }

    public ResponseEntity<?> getOneUser(Integer id){
        HashMap<Integer,UserModel> userHashMap = UserGet();
        UserResponse Response = new UserResponse();
        if(id > userHashMap.size()){
            Response.setMessage("User Not Found!!");
            return ResponseEntity.badRequest().body(Response);
        }else{
            UserModel user = userHashMap.get(id);
            Response.setId(user.getId());
            Response.setMessage("User: " + user.getId());
            Response.setUsername(user.getUsername());
            Response.setEmail(user.getEmail());
            return ResponseEntity.ok(Response);
        }
    }
}
