package com.SpringBoot1.Model;

public class UserModel {

    int id;
    String username;
    String email;
    String pwd;

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String name) {
        this.username = name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public UserModel(int id,String email,String pwd,String username) {
        this.id = id;
        this.email = email;
        this.pwd = pwd;
        this.username = username;
    }
}
