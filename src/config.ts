export const API_ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://10.0.80.80/api/'
    :'http://localhost:8080/api/';

export const WS_NAME = "SpA";