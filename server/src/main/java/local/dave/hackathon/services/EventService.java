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

    public Event save(Event event) {
        UserEventMap userEventMap = new UserEventMap();

        event = eventsRepository.save(event);

        User user = userRepository.findByNameIgnoreCase("George");
        userEventMap.setUser(user);
        userEventMap.setEvent(event);
        userEventMap.setOwner(true);

        userEventMapRepository.save(userEventMap);
        return event;
    }

}
