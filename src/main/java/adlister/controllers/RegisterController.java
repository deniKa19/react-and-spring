package adlister.controllers;

import adlister.models.User;
import adlister.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class RegisterController {
    private final UserRepository userDao;

    public RegisterController(UserRepository userDao) {
        this.userDao = userDao;
    }

    // request param must be url encoded
    @CrossOrigin(value = "http://localhost:3000")
    @RequestMapping("/api/register")
    public String createUser(@RequestParam("username") String username,
                             @RequestParam("password") String password,
                             @RequestParam("email") String email,
                             @RequestParam("first-name") String firstName,
                             @RequestParam("last-name") String lastName){
        return "done";
    }
    @RequestMapping("/api/register-repo")
    public String createUser(@RequestBody User user){
        userDao.save(user);
        return "done";
    }
}
