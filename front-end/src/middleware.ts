import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // Lista de locales suportados pela sua página
    locales: ['pt', 'en'],

    // Locale padrão
    defaultLocale: 'pt',
});

export const config = {
    // Ignora as rotas que não devem ser internacionalizadas,
    // como rotas para arquivos de imagem
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
