package com.SpringBoot1.Request;

public class LoginUserRequest {
    String email,password,username,address;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LoginUserRequest(String email, String password) {
        this.email = email;
        this.password = password;

    }
    public LoginUserRequest(String email, String username,String address) {
        this.email = email;
        this.username = username;
        this.address = address;

    }
}
