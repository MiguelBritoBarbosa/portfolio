import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const pathnameSegments = url.pathname.split('/').filter(Boolean);
    console.log('PRIMEIRO');
    if (pathnameSegments.length === 2) {
        const slug = pathnameSegments[1];

        const locale = slug.endsWith('-en') ? 'en' : 'pt';

        const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
        if (cookieLocale !== locale) {
            const response = NextResponse.redirect(url);
            req.cookies.set('NEXT_LOCALE', locale);
            response.cookies.set('NEXT_LOCALE', locale);
            console.log('Cookie setado: ', response.cookies.get('NEXT_LOCALE'));
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/:path*/:slug'],
};
