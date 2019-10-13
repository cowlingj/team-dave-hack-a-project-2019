package local.dave.hackathon.controllers;

import local.dave.hackathon.entities.Event;
import local.dave.hackathon.entities.User;
import local.dave.hackathon.entities.UserEventMap;
import local.dave.hackathon.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/search")
    public List<User> getUsersByName(@RequestParam(value = "name", required = false, defaultValue = "") String name) {
        return userService.findUsersByName(name);
    }

    @GetMapping("/events")
    public List<Event> getUserEvents(@RequestParam(value = "name") String username) {
        User user = userService.findUser(username);
        return user.getUserEventMaps().stream().map(UserEventMap::getEvent).collect(Collectors.toList());
    }
}
