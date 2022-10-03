package DailyAssignmentWeek5Day1;

public class Part2 {
    public static void main(String[] args) {

        int[] intArr = new int[] {6,8,2,4};


        try{
            checkArr(7,intArr);
        }catch(CusException e){
            System.out.println(e.getMessage());
        }


    }
    public static boolean checkArr(int index,int[] intArr) throws CusException{


            if(index >= 0 && index < intArr.length ){
                System.out.println("Array index exist");
                return true;
            }
            else{

                throw new CusException("array index not exist");

            }

        }

}
