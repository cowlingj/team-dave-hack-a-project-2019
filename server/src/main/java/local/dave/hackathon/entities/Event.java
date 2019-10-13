package local.dave.hackathon.entities;

import javax.persistence.*;
import java.util.List;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    private String name;

    private String location;

    @OneToMany(mappedBy = "event")
    private List<UserEventMap> userEventMaps;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public List<UserEventMap> getUserEventMaps() {
        return userEventMaps;
    }

    public void setUserEventMaps(List<UserEventMap> userEventMaps) {
        this.userEventMaps = userEventMaps;
    }
}
