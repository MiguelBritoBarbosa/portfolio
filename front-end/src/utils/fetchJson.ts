export const fetchJson = async <T>(url: string): Promise<T> => {
    const data = await fetch(url);

    if (!data.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    const jsonData = await data.json();
    return jsonData;
};
