package com.SpringBoot1.Repo;

import com.SpringBoot1.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserModel,Integer> {
    @Query("select users from UserModel users where email = ?1 and password=?2")
    Optional<UserModel> getUserByEmailAndPassword(String email, String password);


    @Query("select user from UserModel user where email = ?1")
    Optional<UserModel> getValidEmail(String email);


    @Modifying
    @Transactional
    @Query("update  UserModel  set token = ?1 where id = ?2")
    Integer updateTokenUsingUserId(String token, Integer id);

    @Modifying
    @Transactional
    @Query("update UserModel set img = ?1 where id = ?2")
    Integer uploadImgDB(String img, Integer id);
}
