import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'a381b3a9a2f3442b8c51e466153652fa', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
