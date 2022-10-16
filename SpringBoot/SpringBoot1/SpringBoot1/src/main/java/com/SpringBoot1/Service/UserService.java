package com.SpringBoot1.Service;

import com.SpringBoot1.Config.CusException;
import com.SpringBoot1.Model.UserModel;
import com.SpringBoot1.Repo.UserRepo;
import com.SpringBoot1.Request.LoginUserRequest;
import com.SpringBoot1.Response.GeneralResponse;
import com.SpringBoot1.Response.UserResponse;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@Service
public class UserService {
    @Autowired
    Environment environment;
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
    @Autowired
    UserRepo userRepo;
    public boolean createUser(LoginUserRequest loginUserRequest) throws Exception{
        try{
            Optional<UserModel> usrEmailExist = userRepo.getValidEmail(loginUserRequest.getEmail());
            if(usrEmailExist.isPresent()){
                throw new CusException("Email already exist!!");
            }
            UserModel userModel = new UserModel();
            userModel.setEmail(loginUserRequest.getEmail());
            userModel.setUsername(loginUserRequest.getUsername());
            userModel.setPassword(loginUserRequest.getPassword());
            userModel.setMobile(loginUserRequest.getMobile());
            userModel.setAddress(loginUserRequest.getAddress());
            userRepo.save(userModel);
            return true;

        }
        catch(Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public UserModel validateLogin(String email,String password) throws  Exception{
        UserModel user =  userRepo.getUserByEmailAndPassword(email,password).orElseThrow(()->new Exception("Invalid username and password,Please Try Again!!"));
        String token = tokenCreation(user);
        updateTokenAuth(token, user.getId());
        user.setToken(token);
        return  user;
    }


    private String tokenCreation(UserModel User){
        Calendar c = Calendar.getInstance();
        //c.add(Calendar.SECOND,3);
        c.add(Calendar.DAY_OF_YEAR,4);
        String token = Jwts.builder()
                .claim("email", User.getEmail())
                .setSubject(User.getUsername())
                .setId(""+User.getId())
                .setIssuedAt(new Date())
                .setExpiration(c.getTime())
                .signWith(SignatureAlgorithm.HS512,environment.getProperty("JWT_SECRET"))
                .compact();
        return token;
    }

    public boolean checkToken(String token) throws CusException {
        //Jwts.parser().setSigningKey("SECRETKEY").parseClaimsJws(token);
        Jwts.parser().setSigningKey(environment.getProperty("JWT_SECRET")).parseClaimsJws(token);
        return true;
    }
    private void updateTokenAuth(String token ,int id){
        userRepo.updateTokenUsingUserId(token,id);
    }

    public boolean validateTokenAuth(String token,Integer id) throws  Exception{
        UserModel user = viewUser(id);
        if(user.getToken().equals(token)){
            return true;
        }else{
            throw new CusException("token not matched!!!");
        }
    }


    public List<UserModel> viewUser() throws  Exception {

        return userRepo.findAll();


    }


    public UserModel viewUser(Integer id) throws Exception{
        Optional <UserModel> userModel =  userRepo.findById(id);

        if(userModel.isPresent()){
            return userModel.get();
        }else{
            throw new CusException("User Not Found!!");
        }
    }
    public boolean updateUser(Integer id ,LoginUserRequest loginUserRequest) throws  Exception{
        try{

            Optional<UserModel> userModelOption = userRepo.findById(loginUserRequest.getId());


            if(userModelOption.isPresent()){
                UserModel userModTmp = userModelOption.get();
                if(loginUserRequest.getEmail() != null && !loginUserRequest.getEmail().equals("")){
                    userModTmp.setEmail(loginUserRequest.getEmail());
                }
                if(loginUserRequest.getMobile() != null && !loginUserRequest.getMobile().equals("")){
                    userModTmp.setMobile(loginUserRequest.getMobile());
                }
                if(loginUserRequest.getUsername()!= null && !loginUserRequest.getUsername().equals("")){
                    userModTmp.setUsername(loginUserRequest.getUsername());
                }
                userRepo.save(userModTmp);
                return true;
            }else{
                throw new CusException("User is not found!!!");
            }


        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    public boolean deleteUser(Integer Id) throws  Exception{

        UserModel userModTmp = userRepo.findById(Id).orElseThrow(()->new CusException("No User Found!!!"));
        userRepo.delete(userModTmp);
        return  true;
    }

    public boolean uploadImage(String img,Integer id) throws Exception{
        userRepo.uploadImgDB(img,id);
        System.out.println("Service method");
        return true;
    }




    public boolean logout(int id) throws Exception{
        updateTokenAuth("",id);
        return  true;
    }



}
