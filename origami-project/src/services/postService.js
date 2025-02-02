import api from './api';

export const getAll = () => {
    return fetch(api.posts)
        .then(x => x.json())
        .catch(x => console.log(`Handled error: ${x}`));
}