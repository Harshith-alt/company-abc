package com.abc.model;

import jakarta.persistence.*;

@Entity
public class Heading {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String heading;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getHeading() { return heading; }
    public void setHeading(String heading) { this.heading = heading; }
}
