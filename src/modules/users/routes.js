import Users from './components/Users';
import Login from './components/Login';

export default function (route) {
    route('/users', Users);
    route('/login', Login);
};