package local.dave.hackathon.repository;

import local.dave.hackathon.entities.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventsRepository extends CrudRepository<Event, Integer> {
}
