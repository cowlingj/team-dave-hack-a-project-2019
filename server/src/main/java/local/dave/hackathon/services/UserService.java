package local.dave.hackathon.services;

import local.dave.hackathon.entities.User;
import local.dave.hackathon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public User findUser(String name) {
        return userRepository.findByNameIgnoreCase(name);
    }

    public List<User> findUsersByName(String name) {
        return userRepository.findAllByNameContainingIgnoreCase(name);
    }
}
