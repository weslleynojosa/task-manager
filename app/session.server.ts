import {createCookieSessionStorage} from "@remix-run/node";


type CookieData = {
    latitude: number;
    longitude: number;
}

type CookieError = {
    error: string;
}

const { getSession, commitSession, destroySession } = createCookieSessionStorage<CookieData, CookieError>({
    cookie: {
        name: '__session',
        httpOnly: true,
        maxAge: 60,
        path: '/',
        sameSite: 'lax',
        secrets: ['s3cret1'],
        secure: true,
    }
})

export { getSession, commitSession, destroySession };