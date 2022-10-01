package services;

import model.Car;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

public class TextParser {
    public Car parse(String filename) {
        try {
            Scanner scanner = new Scanner(new File(filename));
            Car car = new Car();

            while (scanner.hasNext()) {
                String field = scanner.nextLine();
                switch (field) {
                    case "brand":
                        car.setBrand(scanner.nextLine());
                        break;
                    case "model":
                        car.setModel(scanner.nextLine());
                        break;
                    case "odometer":
                        int odometer = Integer.parseInt(scanner.nextLine());
                        car.setOdometer(odometer);
                        break;
                    case "fast":
                        boolean fast = Boolean.parseBoolean(scanner.nextLine());
                        car.setFast(fast);
                        break;
                    case "traits":
                        String line = scanner.nextLine();
                        String[] traits = line.split(", ");
                        car.setTraits(Arrays.asList(traits));
                        break;
                    default:
                        System.err.println("Field is not according to known values");
                }
            }
            return car;
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }
}