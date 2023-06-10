import Loader from './loader';
import { BASE_URL } from '../../constants/api';

class AppLoader extends Loader {
  constructor() {
    super(BASE_URL, {
      apiKey: 'a381b3a9a2f3442b8c51e466153652fa', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
