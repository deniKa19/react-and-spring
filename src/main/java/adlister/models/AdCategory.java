package adlister.models;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="categories")
public class AdCategory {
    @Id @GeneratedValue
    private long id;

    @Column(nullable = false)
    private String name;

    @ManyToMany(mappedBy = "categories")
    @JsonBackReference
    private List<Ad> ads;

    public AdCategory(){}

    public AdCategory(String name, List<Ad> ads) {
        this.name = name;
        this.ads = ads;
    }
    public AdCategory(String id) {
        this.id = Long.parseLong(id);
    }
    public AdCategory(String name, long categoryId) {
        this.name = name;
        this.id = categoryId;
    }
    public AdCategory(long id, String name, List<Ad> ads) {
        this.id = id;
        this.name = name;
        this.ads = ads;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Ad> getAds() {
        return ads;
    }

    public void setAds(List<Ad> ads) {
        this.ads = ads;
    }
}
