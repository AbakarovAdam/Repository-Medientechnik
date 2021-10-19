/*
Author: Abakarov Adam
Class: 2BHITM
Date: 05.10.2021
Program: Different sort methods
 */

package at.htlleonding;
import java.util.Scanner;

public class Main {

    static void randomArray(int[] intArr){

    }

    static void selectionSort(int[] intArr){
        for (int i = 0; i < intArr.length; i++){
            int index = i;
            for (int j = i + 1; j < intArr.length; j++){
                if (intArr[j] < intArr[index]){
                    index = j;
                }
            }
            int smallerNumber = intArr[index];
            intArr[index] = intArr[i];
            intArr[i] = smallerNumber;
        }
    }

    static void bubbleSort(int[] intArr){
        int temp = 0;
        for (int i = 0; i < intArr.length; i++){
            for (int j = 1; j < intArr.length; j++){
                if (intArr[j-1] > intArr[j]){
                    temp = intArr[j-1];
                    intArr[j-1] = intArr[j];
                    intArr[j] = temp;
                }
            }
        }
    }

    static void insertionSort(int[] intArr){
        for (int i = 1; i < intArr.length; i++){
            int x = intArr[i];

            int j = i;
            while (j > 0 && intArr[j-1] > x){
                intArr[j] = intArr[j];
                j--;
            }
             intArr[j] = x;
        }

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int length;

        System.out.println("Please choose the length: ");
        length = sc.nextInt();

        int intArr[] = new int[length];

        System.out.println("Usorted array: ");

        for(int i = 0; i<intArr.length; i++){
            int randomNumber = (int)(Math.random() * length) + 1;
            intArr[i] = randomNumber;
            System.out.println(intArr[i] + " ");
        }
        System.out.println("");
        insertionSort(intArr);
        System.out.println("Sorted array (insertion sort) : ");

        for(int j : intArr){
            System.out.println(j + " ");
        }

    }
}
