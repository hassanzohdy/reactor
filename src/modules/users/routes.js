import router from 'reactor/router';
import Users from './components/Users';
import Login from './components/Login';

router.add('/login', Login);
router.add('/users', Users);