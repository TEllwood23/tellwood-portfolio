// import { useEffect, useState } from 'react';
// import Container from '../components/Container';
// import Header from '../components/Header';
// import ScrollDownMessage from '../components/ScrollDownMessage';
// import MainContent from '../components/MainContent';
// import { fetchData } from '../services/api';

// interface DataItem {
//   id: number;
//   name: string;
//   // Add other fields as needed
// }

// const HomePage: React.FC = () => {
//   const [data, setData] = useState<DataItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await fetchData();
//         setData(data);
//       } catch (error: any) {
//         setError(error.message);
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <Container maxWidth="max-w-3xl" backgroundImage="/images/Background-image.jpg">
//       <div className="flex flex-col items-center justify-center h-screen">
//         <Header />
//         <ScrollDownMessage />
//       </div>
//       <MainContent />
//       <div>
//         <h2>Fetched Data:</h2>
//         {Array.isArray(data) && data.map((item) => (
//           <div key={item.id}>
//             <p>{item.name}</p>
//             {/* Display other fields as needed */}
//           </div>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default HomePage;

// import { useEffect, useState } from 'react';
// import Container from '../components/Container';
// import Header from '../components/Header';
// import ScrollDownMessage from '../components/ScrollDownMessage';
// import MainContent from '../components/MainContent';
// import { fetchData } from '../services/api';

// interface DataItem {
//   id: number;
//   name: string;
// }

// const HomePage: React.FC = () => {
//   const [data, setData] = useState<DataItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await fetchData();
//         setData(data);
//       } catch (error: any) {
//         setError(error.message);
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Container maxWidth="max-w-3xl" backgroundImage="/images/Background-image.jpg" backgroundOpacity={0.5}>
//         <div className="flex flex-col items-center justify-center h-screen">
//           <Header />
//           <ScrollDownMessage />
//         </div>
//         <MainContent />
//         <div>
//           <h2>Fetched Data:</h2>
//           {Array.isArray(data) && data.map((item) => (
//             <div key={item.id}>
//               <p>{item.name}</p>
//               {/* Display other fields as needed */}
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;

// import { useEffect, useState } from 'react';
// import Container from '../components/Container';
// import Header from '../components/Header';
// import ScrollDownMessage from '../components/ScrollDownMessage';
// import MainContent from '../components/MainContent';
// import { fetchData } from '../services/api';

// interface DataItem {
//   id: number;
//   name: string;
// }

// const HomePage: React.FC = () => {
//   const [data, setData] = useState<DataItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await fetchData();
//         setData(data);
//       } catch (error: any) {
//         setError(error.message);
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
//       <Container maxWidth="max-w-7xl" backgroundImage="/images/Background-image.jpg" backgroundOpacity={0.5}>
//         <div className="flex flex-col items-center justify-center min-h-screen">
//           <Header />
//           <ScrollDownMessage />
//         </div>
//         <MainContent />
//         <div>
//           <h2>Fetched Data:</h2>
//           {Array.isArray(data) && data.map((item) => (
//             <div key={item.id}>
//               <p>{item.name}</p>
//               {/* Display other fields as needed */}
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;

// import { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import ScrollDownMessage from '../components/ScrollDownMessage';
// import MainContent from '../components/MainContent';
// import Container from '../components/Container';
// import { fetchData } from '../services/api';

// interface DataItem {
//   id: number;
//   name: string;
// }

// const HomePage: React.FC = () => {
//   const [data, setData] = useState<DataItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await fetchData();
//         setData(data);
//       } catch (error: any) {
//         setError(error.message);
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
//       <Container maxWidth="max-w-7xl" backgroundImage="/images/Background-image.jpg" backgroundOpacity={0.5}>
//         <div className="flex flex-col items-center justify-center min-h-screen">
//           <Header />
//           <ScrollDownMessage />
//         </div>
//         <MainContent />
//         <div>
//           <h2>Fetched Data:</h2>
//           {Array.isArray(data) && data.map((item) => (
//             <div key={item.id}>
//               <p>{item.name}</p>
//               {/* Display other fields as needed */}
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;


// import { useEffect, useState } from 'react';
// import Header from '../components/Header';
// import ScrollDownMessage from '../components/ScrollDownMessage';
// import MainContent from '../components/MainContent';
// import Container from '../components/Container';
// import { fetchData } from '../services/api';

// interface DataItem {
//   id: number;
//   name: string;
// }

// const HomePage: React.FC = () => {
//   const [data, setData] = useState<DataItem[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const data = await fetchData();
//         setData(data);
//       } catch (error: any) {
//         setError(error.message);
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
//       <Container maxWidth="max-w-7xl" backgroundImage="/images/Background-image.jpg" backgroundOpacity={0.5}>
//         <div className="flex flex-col items-center justify-center min-h-screen">
//           <Header />
//           <ScrollDownMessage />
//         </div>
//         <MainContent />
//         <div>
//           <h2>Fetched Data:</h2>
//           {Array.isArray(data) && data.map((item) => (
//             <div key={item.id}>
//               <p>{item.name}</p>
//               {/* Display other fields as needed */}
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;


'use client'

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ScrollDownMessage from '../components/ScrollDownMessage';
import MainContent from '../components/MainContent';
import Container from '../components/Container';
import { fetchData } from '../services/api';

interface DataItem {
  id: number;
  name: string;
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
    <div className="flex items-center justify-center bg-white-100 overflow-hidden">
      <Container maxWidth="max-w-6xl" backgroundImage="/images/Background-image.jpg" backgroundOpacity={0.5}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Header />
          <ScrollDownMessage />
        </div>
        <MainContent />
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
    </div>
  );
};

export default HomePage;
