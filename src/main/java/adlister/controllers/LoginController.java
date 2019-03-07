package adlister.controllers;
import adlister.models.User;
import adlister.repositories.UserRepository;
import adlister.util.Password;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@RestController
@SessionAttributes("user")
@CrossOrigin("http://localhost:3000")
public class LoginController {
    private final UserRepository userDao;

    public LoginController(UserRepository userDao) {
        this.userDao = userDao;
    }


    @RequestMapping("/api/login-user")
    public void checkoutUser(@RequestParam("username") String username,
                             @RequestParam("password") String password,
                             HttpServletRequest request){
        HttpSession session = request.getSession();
        User comparingUser = userDao.getUserByUsername(username);
        if (Password.check(password, comparingUser.getPassword())) {
            session.setAttribute("authUser", comparingUser);
        } else {
            throw new RuntimeException("invalid entry");
        }
    }
    @RequestMapping("/api/logout")
    public void checkoutUser(HttpServletRequest request){
        HttpSession session = request.getSession();
        session.invalidate();
    }
}
