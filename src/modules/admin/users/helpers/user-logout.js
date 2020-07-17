import user from "user";
import { logout } from "../services/auth";
import { navigateTo } from 'reactor/router';

export default function userLogout() {
    // logout from the server
    logout();

    setTimeout(() => {
        // clear user data from cache >> Clear the access token
        user.logout();

        // navigate to login page
        navigateTo('/login');
    }, 0);
}