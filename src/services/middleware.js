import store from '@/store/store';

const ifAuthenticated = (to, from, next) => {
    if(to.path == '/registration') {
        next();
    } else if (store.getters.isAuthentificated) {
        next();
    } else {
        next({ name: 'login' });
    }
};

export {ifAuthenticated};