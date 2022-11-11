import { auth } from './Auth';
import { user } from './user';

export const endpoint = {
    baseUrl: "http://localhost:3333/api",
    ...auth,
    ...user,
};