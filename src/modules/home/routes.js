import router from 'reactor/router';
import Home from './components/home';
import Guardian from 'modules/users/middleware/guardian';

router.add('/', Home, Guardian);
