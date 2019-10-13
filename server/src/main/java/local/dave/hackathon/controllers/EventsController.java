package local.dave.hackathon.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EventsController {

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }
}
