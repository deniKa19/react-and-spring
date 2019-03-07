package adlister.repositories;

import adlister.models.Ad;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AdRepository extends CrudRepository <Ad, Long> {
    @Query(value = "SELECT * FROM ads WHERE user_id = ?1 order by id desc", nativeQuery = true)
    List<Ad> getAdsById(long id);

    @Query(value = "select * from ads order by id desc", nativeQuery = true)
    List<Ad> getAllAds();
}
