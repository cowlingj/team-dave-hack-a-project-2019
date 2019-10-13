package local.dave.hackathon.controllers;

import local.dave.hackathon.entities.Event;
import local.dave.hackathon.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/event")
public class EventsController {

    @Autowired
    private EventService eventService;

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventService.save(event);
    }
}
