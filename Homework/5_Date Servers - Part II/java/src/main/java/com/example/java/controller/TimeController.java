package com.example.java.controller;

import com.example.java.service.TimeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class TimeController {
    private final TimeService timeService = new TimeService();

    @GetMapping("/timestamp")
    public Date getTimestamp() {
        return timeService.getTime();
    }

    @GetMapping("/requestTimestamp")
    public Date requestTimestamp() {
        return timeService.requestTime();
    }
}
