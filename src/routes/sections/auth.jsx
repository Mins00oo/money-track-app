import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthCenteredLayout } from 'src/layouts/auth';

import { SplashScreen } from 'src/components/loading-screen';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

/** **************************************
 * Jwt
 *************************************** */
const Jwt = {
    SignInPage: lazy(() => import('src/pages/auth/jwt/sign-in')),
};

const authJwt = {
    path: 'jwt',
    children: [
        {
            path: 'sign-in',
            element: (
                <GuestGuard>
                    <AuthCenteredLayout section={{ title: 'Hi, Welcome back' }}>
                        <Jwt.SignInPage />
                    </AuthCenteredLayout>
                </GuestGuard>
            ),
        },
        {
            path: 'sign-up',
            element: (
                <GuestGuard>
                    <AuthCenteredLayout>
                        <Jwt.SignUpPage />
                    </AuthCenteredLayout>
                </GuestGuard>
            ),
        },
    ],
};

// ----------------------------------------------------------------------

export const authRoutes = [
    {
        path: 'auth',
        element: (
            <Suspense fallback={<SplashScreen />}>
                <Outlet />
            </Suspense>
        ),
        children: [authJwt],
    },
];
