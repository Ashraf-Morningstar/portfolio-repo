package cochran;

import java.util.Date;
import java.util.List;
import java.util.ArrayList;

public class Merritt {
    private String name;
    private Date createdAt;
    private List<String> data;

    public Berg() {
        this.name = "town";
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