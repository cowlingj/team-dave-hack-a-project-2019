package local.dave.hackathon.repository;

import local.dave.hackathon.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByNameIgnoreCase(String username);
    List<User> findAllByNameContainingIgnoreCase(String username);
}
