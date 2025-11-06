package mcdonald;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class Carpenter {
    private String name;
    private Date createdAt;
    private List<String> data;

    public Williams() {
        this.name = "star";
        this.createdAt = new Date();
        this.data = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreatedAt() {
        return createdAt;
    }
}