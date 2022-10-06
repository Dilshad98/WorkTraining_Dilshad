package DailyAssignmentWeek5Day4;

import java.io.FileOutputStream;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

public class FileWrite {

    public static void main(String[] args) {

        ArrayList<User> userList = new ArrayList<User>();

        User user1 = new User("John",34,"blk 123 rainbow road #12-77 S(623123)");
        User user2 = new User("Bob",14,"blk 144 sunshine road #19-56 S(623144)");
        User user3 = new User("Aashiq",25,"blk 137 canberra road #19-54 S(667137)");
        User user4 = new User("Adam",28,"blk 156 ring road #19-54 S(671156)");
        User user5 = new User("Asraf",16,"blk 167 hamilton road #23-67 S(670167)");
        User user6 = new User("Michael", 14, "blk 173 rain road #33-77 S(623173)");
        User user7 = new User("Sally", 34, "blk 149 nutella road #31-36 S(623149)");
        User user8 = new User("Asif", 15, "blk 197 canberra road #41-50 S(667197)");
        User user9 = new User("Celia", 23, "blk 189 helmet road #19-54 S(671189)");
        User user10 = new User("Sofia", 11, "blk 171 prince road #23-67 S(670171)");

        // Adding to the arraylist
        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        userList.add(user4);
        userList.add(user5);
        userList.add(user6);
        userList.add(user7);
        userList.add(user8);
        userList.add(user9);
        userList.add(user10);

        try{
            String path = "C:/Users/dilsh/WorkTrain/WorkTraining_Dilshad/Java/Java1/src/DailyAssignmentWeek5Day4/userList.txt";
            FileOutputStream wri =  new FileOutputStream(path,true);

            for(User us : userList){
                String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));
                wri.write(
                        String.format("Name: %s \nAddress: %s \nDateTime: %s\n--------------------------------------------------------------------\n",us.getName(),us.getAddress(),dateTime).getBytes()

                );
            }



        }catch (Exception e){
            e.printStackTrace();
        }





    }
}
