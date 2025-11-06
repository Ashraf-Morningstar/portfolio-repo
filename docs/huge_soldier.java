package clark;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class Weeks {
    private String name;
    private Date createdAt;
    private List<String> data;

    public Wheeler() {
        this.name = "compare";
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