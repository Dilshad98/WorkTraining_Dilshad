package com.SpringBoot1.Response;

public class UserResponse {
    int id;
    String username,email,pwd,message;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public UserResponse() {
    }

    public UserResponse(int id, String username, String email, String pwd, String message) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.message = message;
    }
}
