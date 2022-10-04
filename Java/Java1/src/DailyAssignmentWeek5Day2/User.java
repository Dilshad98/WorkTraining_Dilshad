package DailyAssignmentWeek5Day2;


public class User implements Comparable<User> {
    String name;
    int age;

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

    public int getAge(){
        return age;
    }

    public void setAge(int age){
        this.age = age;
    }

    public int compareTo(User u1){
        return this.getName().compareToIgnoreCase(u1.getName());
    }


}
