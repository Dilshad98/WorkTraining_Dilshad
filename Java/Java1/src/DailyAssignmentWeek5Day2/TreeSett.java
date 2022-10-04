package DailyAssignmentWeek5Day2;

import java.util.TreeSet;

public class TreeSett {
    public static void main(String[] args){
        TreeSet<User> usr = new TreeSet<User>();

        User user1 = new User();
        user1.setName("Sandy");
        user1.setAge(22);

        User user2 = new User();
        user2.setName("Daniel");
        user2.setAge(54);


        User user3 = new User();
        user3.setName("Helen");
        user3.setAge(12);

        usr.add(user1);
        usr.add(user2);
        usr.add(user3);

        for(User user : usr){
            System.out.println("Name: "+user.getName() + " Age:"+user.getAge());
        }



    }
}
