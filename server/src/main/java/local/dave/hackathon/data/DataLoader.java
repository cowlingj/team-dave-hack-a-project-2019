package local.dave.hackathon.data;

import local.dave.hackathon.entities.User;
import local.dave.hackathon.services.EventService;
import local.dave.hackathon.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationListener<ContextRefreshedEvent> {

    @Autowired
    private UserService userService;
    
    @Autowired
    private EventService eventService;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent contextRefreshedEvent) {
        User user1 = new User();
        User user2 = new User();
        User user3 = new User();
        
        user1.setName("George");
        user2.setName("Katie");
        user3.setName("Jonathan");
        
        user1.setHomeAddress("50 kippax");
        user2.setHomeAddress("10 xyz");
        user3.setHomeAddress("123 abc");
        
        user1 = userService.save(user1);
        user2 = userService.save(user2);
        user3 = userService.save(user3);
    }
}
