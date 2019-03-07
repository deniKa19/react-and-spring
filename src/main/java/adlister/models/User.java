package adlister.models;
import adlister.util.Password;
import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue
    private long id;
    @Column
    private String username;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String firstName;
    @Column
    private String lastName;

    public User() {}



    // User 1st time creation constructor
    public User(String username, String email, String password, String firstName, String lastName) {
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        setPassword(password);
    }
    // JSON constructor
    public User(String id) {
        this.id = Long.parseLong(id);
    }

    // User retrieval constructor
    public User(long id, String username, String email, String password, String firstName, String lastName) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    public void setId(String id) {
        this.id = Long.parseLong(id);
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = Password.encrypt(password);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}