package com.example.java.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class TextParser {
    public String parse(String filename) {
        try {
            Scanner scanner = new Scanner(new File(filename));
            StringBuilder contents = new StringBuilder();

            while (scanner.hasNext()) {
                contents.append(scanner.nextLine() + "\n");
            }
            return contents.toString();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            return null;
        }
    }

    // I thought we were supposed to send objects back
    // but from rereading assignment, it seems like we have to send the contents back?
    /*
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
    }*/
}