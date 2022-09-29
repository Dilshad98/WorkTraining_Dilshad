public class Part2 {
    String[] strArr = {"Hi","Hello","Hey"};

    long[] longArr = {66768768,6464545,90988454,5743957};
    public static void main(String[] args) {
        // create an object
        Part2 part2 = new Part2();

        //Enhance for-loop for String[] to iterate
        for (String xx : part2.strArr) {

            System.out.println(xx);
        }

        //Enhance for-loop for long[] to iterate
        for( long vv : part2.longArr){
            System.out.println(vv);
        }




    }
}
