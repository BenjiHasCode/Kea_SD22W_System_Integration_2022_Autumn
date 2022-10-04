package com.example.java.service;

import org.springframework.web.client.RestTemplate;

import java.util.Date;

public class TimeService {
    public Date getTime() {
        return new Date();
    }

    public Date requestTime() {
        final String uri = "http://localhost:3000/timestamp";

        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(uri, Date.class);
    }
}
