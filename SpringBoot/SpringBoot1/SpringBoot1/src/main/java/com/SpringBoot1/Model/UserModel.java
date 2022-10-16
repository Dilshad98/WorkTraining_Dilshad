package com.SpringBoot1.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;


import javax.persistence.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class UserModel {

    @Id //primary key
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    Integer id;
    String username;
    String email;
    @JsonIgnore
    String password;

    String mobile;
    String address;
    String token;
    String img;

//    public String getToken() {
//        return token;
//    }
//
//    public void setToken(String token) {
//        this.token = token;
//    }
//
//    public String getMobile() {
//        return mobile;
//    }
//
//    public void setMobile(String mobile) {
//        this.mobile = mobile;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    String address;
//
//    public Integer getId() {
//        return id;
//    }
//
//    public UserModel() {
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String name) {
//        this.username = name;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String pwd) {
//        this.password = password;
//    }

    public UserModel(Integer id,String email,String password,String username) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
    }


}
