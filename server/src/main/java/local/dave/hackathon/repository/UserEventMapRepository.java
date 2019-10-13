package local.dave.hackathon.repository;

import local.dave.hackathon.entities.Event;
import local.dave.hackathon.entities.User;
import local.dave.hackathon.entities.UserEventMap;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserEventMapRepository extends CrudRepository<UserEventMap, Integer> {

    UserEventMap findByUserAndEvent(User user, Event event);
}
