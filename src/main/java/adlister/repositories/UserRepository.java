package adlister.repositories;
import adlister.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository <User, Long> {
    @Query(value = "SELECT * FROM users WHERE username = ?1", nativeQuery = true)
    User getUserByUsername(String username);
    @Query(value = "SELECT * FROM users WHERE id = ?1", nativeQuery = true)
    User getUserById(long id);
}