package DailyAssignmentWeek5Day3;

import java.util.ArrayList;
import java.util.HashMap;

public class HashMapWithArrayList {
    public static void main(String[] args) {
        HashMap<String, ArrayList<User>> hashOb = new HashMap<String, ArrayList<User>>();

        // ArrayList 1
        ArrayList<User> userList = new ArrayList<User>();

        User user1 = new User("John", 34, "blk 123 rainbow road #12-77 S(623123)");
        User user2 = new User("Bob", 14, "blk 144 sunshine road #19-56 S(623144)");
        User user3 = new User("Aashiq", 25, "blk 137 canberra road #19-54 S(667137)");
        User user4 = new User("Adam", 28, "blk 156 ring road #19-54 S(671156)");
        User user5 = new User("Asraf", 16, "blk 167 hamilton road #23-67 S(670167)");

        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        userList.add(user4);
        userList.add(user5);


        // ArrayList 2
        ArrayList<User> userList2 = new ArrayList<User>();

        User us1 = new User("Michael", 14, "blk 173 rain road #33-77 S(623173)");
        User us2 = new User("Sally", 34, "blk 149 nutella road #31-36 S(623149)");
        User us3 = new User("Asif", 15, "blk 197 canberra road #41-50 S(667197)");
        User us4 = new User("Celia", 23, "blk 189 helmet road #19-54 S(671189)");
        User us5 = new User("Sofia", 11, "blk 171 prince road #23-67 S(670171)");

        userList2.add(us1);
        userList2.add(us2);
        userList2.add(us3);
        userList2.add(us4);
        userList2.add(us5);

        hashOb.put("1",userList);
        hashOb.put("2",userList2);

        for( String key:hashOb.keySet()){
            ArrayList<User> tmp = hashOb.get(key);

            System.out.println("\nKey: "+key);
            System.out.println("----------------------------");
            for(User str:tmp ){
                System.out.println("Name: "+str.getName() + " Age: " + str.getAge());

            }

        }

    }
}
