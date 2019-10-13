package local.dave.hackathon.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class UserEventMap {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer Id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference(value = "users")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonBackReference(value = "events")
    @JoinColumn(name = "event_id")
    private Event event;

    private boolean owner;

    private LocalDateTime leavingTime;
    private String leavingLocation;
    private LocalDateTime ETA;

    private boolean arrivedHome;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public boolean isOwner() {
        return owner;
    }

    public void setOwner(boolean owner) {
        this.owner = owner;
    }

    public LocalDateTime getLeavingTime() {
        return leavingTime;
    }

    public void setLeavingTime(LocalDateTime leavingTime) {
        this.leavingTime = leavingTime;
    }

    public String getLeavingLocation() {
        return leavingLocation;
    }

    public void setLeavingLocation(String leavingLocation) {
        this.leavingLocation = leavingLocation;
    }

    public LocalDateTime getETA() {
        return ETA;
    }

    public void setETA(LocalDateTime ETA) {
        this.ETA = ETA;
    }

    public boolean isArrivedHome() {
        return arrivedHome;
    }

    public void setArrivedHome(boolean arrivedHome) {
        this.arrivedHome = arrivedHome;
    }
}
