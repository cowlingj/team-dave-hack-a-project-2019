package local.dave.hackathon.services;

import local.dave.hackathon.entities.Event;
import local.dave.hackathon.entities.User;
import local.dave.hackathon.entities.UserEventMap;
import local.dave.hackathon.repository.EventsRepository;
import local.dave.hackathon.repository.UserEventMapRepository;
import local.dave.hackathon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    private EventsRepository eventsRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserEventMapRepository userEventMapRepository;

    public Event findEventById(Integer id) {
        return eventsRepository.findById(id).get();
    }

    public Event save(Event event) {
        User user = userRepository.findByNameIgnoreCase("George");
        event = eventsRepository.save(event);
        createUserEventMap(user, event, true);
        return event;
    }

    public UserEventMap createUserEventMap(User user, Event event, boolean isOwner) {
        UserEventMap userEventMap = new UserEventMap();

        userEventMap.setUser(user);
        userEventMap.setEvent(event);
        userEventMap.setOwner(isOwner);

        return userEventMapRepository.save(userEventMap);
    }

}
