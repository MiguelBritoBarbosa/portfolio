export const fetchJson = async <T>(url: string): Promise<T> => {
    const data = await fetch(url);
    if (!data.ok) {
        console.log(data);
    }
    const jsonData = await data.json();
    return jsonData;
};
