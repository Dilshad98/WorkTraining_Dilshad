package DailyAssignmentWeek5Day1;

public class ChildClass extends AbstrClass implements Interface1,Interface2{

    public static void main(String[] args) {
        AbstrClass ab = new ChildClass();
        ab.area(5);

        ab.PrintMessage();

        Interface1 ab1 = new ChildClass();
        ab1.perimeter(5,8);

        Interface2 ab2 = new ChildClass();
        ab2.volume(6.9,9);


    }


    @Override
    protected void PrintMessage() {

        System.out.println("--------------------------");
    }

    @Override
    public void perimeter(int a , int b) {
        int per = a + b;
        System.out.println("The perimeter is "+ per);
    }

    @Override
    public void volume(double height, int a) {
        double vol = height * a * a;
        System.out.println("The volume is "+vol);
    }
}
