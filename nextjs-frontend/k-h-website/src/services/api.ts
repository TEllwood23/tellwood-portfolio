// k-h-website/src/services/api.ts
const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL as string;

interface DataItem {
  id: number;
  name: string;
  // Add other fields as needed
}

export const fetchData = async (): Promise<DataItem[]> => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}/endpoint`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: DataItem[] = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
