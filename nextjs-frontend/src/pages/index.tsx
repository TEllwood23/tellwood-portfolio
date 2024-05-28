import { useEffect, useState } from 'react';
import Container from '../components/Container';
import { fetchData } from '../services/api';

interface DataItem {
  id: number;
  name: string;
  // Add other fields as needed
}

const HomePage: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error: any) {
        setError(error.message);
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container bgColor="bg-blue-100">
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage- it is now working.</p>
      <div>
        <h2>Fetched Data:</h2>
        {Array.isArray(data) && data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            {/* Display other fields as needed */}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HomePage;
