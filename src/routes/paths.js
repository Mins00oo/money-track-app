// ----------------------------------------------------------------------

const ROOTS = {
    AUTH: '/auth',
    DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
    faqs: '/faqs',
    minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
    // AUTH
    auth: {
        amplify: {
            signIn: `${ROOTS.AUTH}/amplify/sign-in`,
            verify: `${ROOTS.AUTH}/amplify/verify`,
            signUp: `${ROOTS.AUTH}/amplify/sign-up`,
            updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
            resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
        },
        jwt: {
            signIn: `${ROOTS.AUTH}/jwt/sign-in`,
            signUp: `${ROOTS.AUTH}/jwt/sign-up`,
            resetPassword: `${ROOTS.AUTH}/jwt/sign-up`,
        },
        firebase: {
            signIn: `${ROOTS.AUTH}/firebase/sign-in`,
            verify: `${ROOTS.AUTH}/firebase/verify`,
            signUp: `${ROOTS.AUTH}/firebase/sign-up`,
            resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
        },
        auth0: {
            signIn: `${ROOTS.AUTH}/auth0/sign-in`,
        },
        supabase: {
            signIn: `${ROOTS.AUTH}/supabase/sign-in`,
            verify: `${ROOTS.AUTH}/supabase/verify`,
            signUp: `${ROOTS.AUTH}/supabase/sign-up`,
            updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
            resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
        },
    },
    authDemo: {
        split: {
            signIn: `${ROOTS.AUTH_DEMO}/split/sign-in`,
            signUp: `${ROOTS.AUTH_DEMO}/split/sign-up`,
            resetPassword: `${ROOTS.AUTH_DEMO}/split/reset-password`,
            updatePassword: `${ROOTS.AUTH_DEMO}/split/update-password`,
            verify: `${ROOTS.AUTH_DEMO}/split/verify`,
        },
        centered: {
            signIn: `${ROOTS.AUTH_DEMO}/centered/sign-in`,
            signUp: `${ROOTS.AUTH_DEMO}/centered/sign-up`,
            resetPassword: `${ROOTS.AUTH_DEMO}/centered/reset-password`,
            updatePassword: `${ROOTS.AUTH_DEMO}/centered/update-password`,
            verify: `${ROOTS.AUTH_DEMO}/centered/verify`,
        },
    },
    // DASHBOARD
    dashboard: {
        root: ROOTS.DASHBOARD,
        two: `${ROOTS.DASHBOARD}/two`,
        three: `${ROOTS.DASHBOARD}/three`,
        group: {
            root: `${ROOTS.DASHBOARD}/group`,
            five: `${ROOTS.DASHBOARD}/group/five`,
            six: `${ROOTS.DASHBOARD}/group/six`,
        },
    },
};
