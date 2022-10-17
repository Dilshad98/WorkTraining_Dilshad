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

        try {

            if(request.getMethod().equals("OPTIONS")){
                return true;
            }
            if (curUrl.endsWith("LoginUser") || curUrl.contains("Register")|| curUrl.contains("readUploadImg")) {
                System.out.println("Can access without token!!!");
                return true;
            }

            String token = request.getHeader("token");
            String id = request.getHeader("id");
           System.out.println("Token : "+token);

            if (token == null || token.equals("")) {
                System.out.println("Token is null/empty");
                throw new CusException("NO TOKEN!!!");
            }
            if (id == null || id.equals("")) {
                System.out.println("Id is null/empty");
                throw new CusException("No Id!!!");
            }

            Integer idInt = Integer.parseInt(id);
            userService.checkToken(token);
            if (userService.validateTokenAuth(token, idInt)) {
                return true;
            } else {
                return false;
            }

        }
        catch(Exception e){
            throw new CusException(e.getMessage());
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
