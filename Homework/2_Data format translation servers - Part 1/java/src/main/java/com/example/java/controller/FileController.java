package com.example.java.controller;

import com.example.java.service.TextParser;
import com.example.java.service.XmlParser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import model.Car;

@RestController
public class FileController {
    private final TextParser textParser = new TextParser();
    private final XmlParser xmlParser = new XmlParser();

    @GetMapping("/txt")
    public String getTxtCar() {
        return textParser.parse("src/main/resources/car.txt");
    }

    @GetMapping("/xml")
    public Car getXmlCar() {
        return xmlParser.parse("src/main/resources/car.xml");
    }
}
