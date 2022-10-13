package com.SpringBoot1.Config;

import com.SpringBoot1.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Configuration
public class TokenAuthInterceptor implements HandlerInterceptor {

    @Autowired
    UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("pre handle section");
        String curUrl = request.getRequestURL().toString();
        System.out.println("Current URL : "+ curUrl);

        if(curUrl.endsWith("LoginUser")){
            System.out.println("Can access without token!!!");
            return true;
        }

        String token = request.getHeader("token");
        String id = request.getHeader("id");
        Integer idInt = Integer.parseInt(id);

        if(token.equals("")){
            throw new Exception("NO TOKEN!!!");
        }
        if(id.equals("")){
            throw new Exception("No Id!!!");
        }

        if(userService.validateTokenAuth(token,idInt)){
            return true;
        }else {
            return false;
        }
    }


    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("this is post handle");
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }



    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
        System.out.println("this is afterCompletion");
    }





}
