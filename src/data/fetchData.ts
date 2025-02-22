const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchData<T>(
  endpoint: string,
  params: Record<string, string> = {}
): Promise<T> {
  try {
    const urlParams = new URLSearchParams({ ...params });
    const url = `${API_BASE_URL}${endpoint}?${urlParams.toString()}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
