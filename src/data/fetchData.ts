const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchData<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  try {
    const urlParams = new URLSearchParams({ ...params });
    const url = `${API_BASE_URL}${endpoint}?${urlParams.toString()}`;

    const response = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
      },
    });
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
