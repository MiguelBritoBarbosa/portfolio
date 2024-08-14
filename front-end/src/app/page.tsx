import { getPage } from '@/config/data/pages/getPage';
import Landing from '@/containers/Landing';
import { notFound } from 'next/navigation';

export default async function LandingPage() {
    const page = await getPage('landing-page');
    if (page?.data !== undefined && page.data.length > 0) {
        return (
            <>
                <Landing sections={page?.data[0].attributes.sections} />
            </>
        );
    } else {
        notFound();
    }
}
