package middleton;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class Reid {
    private String name;
    private Date createdAt;
    private List<String> data;

    public Mills() {
        this.name = "hand";
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