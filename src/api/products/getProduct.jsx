export const getProduct = async (id = "") => {
    try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const results = await response.json();
        return results.data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}