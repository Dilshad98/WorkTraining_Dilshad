package DailyAssignmentWeek5Day1;

public abstract class AbstrClass {

    int a;
    int height;
    public void area(int a){

        int area = a * a;
        System.out.println("The area is "+ area);
    }
    abstract protected void PrintMessage();



}
