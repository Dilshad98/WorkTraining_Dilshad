package com.SpringBoot1.Repo;

import com.SpringBoot1.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserModel,Integer> {
    @Query("select users from UserModel users where email = ?1 and password=?2")
    Optional<UserModel> getUserByEmailAndPassword(String email, String password);


    @Query("select user from UserModel user where email = ?1")
    Optional<UserModel> getValidEmail(String email);

}
