export async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(url, options);

    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    console.error(error);
  }
}
