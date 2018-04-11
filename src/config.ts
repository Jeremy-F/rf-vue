export const API_ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://projet.jeremy-f.me/api/'
    :'http://localhost:8080/api/';

export const WS_NAME = "SpA";