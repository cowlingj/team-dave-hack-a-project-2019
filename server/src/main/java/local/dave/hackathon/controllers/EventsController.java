package local.dave.hackathon.controllers;

import local.dave.hackathon.entities.Event;
import local.dave.hackathon.entities.User;
import local.dave.hackathon.entities.UserEventMap;
import local.dave.hackathon.services.EventService;
import local.dave.hackathon.services.UserEventMapService;
import local.dave.hackathon.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/event")
public class EventsController {

    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;

    @Autowired
    private UserEventMapService userEventMapService;

    @GetMapping("/ping")
    public String ping() {
        return "pong";
    }

    @PostMapping
    public Event createEvent(@RequestBody Event event) {
        return eventService.save(event);
    }

    @GetMapping("/{eventId}/friends")
    public List<User> getEventFriends(@PathVariable("eventId") Integer eventId) {
        Event event = eventService.findEventById(eventId);
        return event.getUserEventMaps().stream().map(UserEventMap::getUser).collect(Collectors.toList());
    }

    @PostMapping("/{eventId}/addFriend")
    public UserEventMap addUserToEvent(@PathVariable("eventId") Integer eventId, @RequestParam("username") String username) {
        User user = userService.findUser(username);
        Event event = eventService.findEventById(eventId);

        UserEventMap userEventMap = eventService.createUserEventMap(user, event, false);
        return userEventMapService.save(userEventMap);
    }
}
