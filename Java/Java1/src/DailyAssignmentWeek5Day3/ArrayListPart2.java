package DailyAssignmentWeek5Day3;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class ArrayListPart2 {

    public static void main(String[] args) {
        ArrayList<User> userList = new ArrayList<User>();

        User user1 = new User("John",34,"blk 123 rainbow road #12-77 S(623123)");
        User user2 = new User("Bob",14,"blk 144 sunshine road #19-56 S(623144)");
        User user3 = new User("Aashiq",25,"blk 137 canberra road #19-54 S(667137)");
        User user4 = new User("Adam",28,"blk 156 ring road #19-54 S(671156)");
        User user5 = new User("Asraf",16,"blk 167 hamilton road #23-67 S(670167)");

        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        userList.add(user4);
        userList.add(user5);

        // Part 2.1
        List<User> filterList = userList.stream().filter((obj)->obj.getAge()<20).collect(Collectors.toList());
        System.out.println("-----Part 2.1-------");
        filterList.forEach((obj)->{
            System.out.println("Age: "+obj.getAge()+" Name: "+obj.getName());
        });

        // Part 2.2
        List<User> aList = userList.stream().filter((obj)->obj.getName().startsWith("A")).limit(1).collect(Collectors.toList());
        System.out.println("\n-----Part 2.2-------");
        aList.forEach((obj)->{
            System.out.println(obj.getName());
        });


    }
}
