package local.dave.hackathon.services;

import local.dave.hackathon.entities.Event;
import local.dave.hackathon.entities.User;
import local.dave.hackathon.entities.UserEventMap;
import local.dave.hackathon.repository.UserEventMapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserEventMapService {

    @Autowired
    private UserEventMapRepository userEventMapRepository;

    public UserEventMap save(UserEventMap userEventMap) {
        return userEventMapRepository.save(userEventMap);
    }

}
