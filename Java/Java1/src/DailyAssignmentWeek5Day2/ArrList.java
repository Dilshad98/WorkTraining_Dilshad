package DailyAssignmentWeek5Day2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
public class ArrList {

    public static void main(String[] args){
        ArrayList <Product> productList = new ArrayList<Product>();

        Product product1 = new Product();
        product1.setName("Ring");
        product1.setPrice(124.65);


        Product product2 = new Product();
        product2.setName("Necklace");
        product2.setPrice(235.85);


        Product product3 = new Product();
        product3.setName("Shoes");
        product3.setPrice(55.65);

        productList.add(product1);
        productList.add(product2);
        productList.add(product3);

        Collections.sort(productList,new PriceComparator());
        for(Product prod : productList){
            System.out.println("Product Name: "+ prod.getName() + " Price: "+prod.getPrice());
        }



    }
}

class PriceComparator implements Comparator<Product>{

    public int compare(Product prd1, Product prd2){
        return Double.compare(prd1.getPrice(),prd2.getPrice());
    }
}