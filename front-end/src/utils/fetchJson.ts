import { API_TOKEN } from '@/config/siteConfig';

export const fetchJson = async <T>(url: string): Promise<T> => {
    const data = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + API_TOKEN,
        }),
    });
    if (!data.ok) {
        console.log(data);
    }
    const jsonData = await data.json();
    return jsonData;
};
