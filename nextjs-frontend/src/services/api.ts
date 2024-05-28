const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL as string;

interface DataItem {
  id: number;
  name: string;
  // Add other fields as needed
}

export const fetchData = async (): Promise<DataItem[]> => {
  try {
    const response: Response = await fetch(`${API_BASE_URL}/api/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: DataItem[] = await response.json();
    return data;
  } catch (error: any) {
    console.error('Fetch error:', error);
    throw error;
  }
};
