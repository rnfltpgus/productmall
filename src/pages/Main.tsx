import { useEffect, useState } from 'react';

import Instance from 'api/Instance';

interface Club {
  coverUrl: string;
  description: string;
  id: string;
  meetings: Meeting[];
  name: string;
  place: string;
  type: string;
}

interface Meeting {
  order: number;
  endedAt: string;
  startedAt: string;
}

interface Person {
  name: string;
}

interface Products {
  club: Club;
  price: number;
  leaders: Person[];
  partners: Person[];
  createdAt: string;
}

const Main = (): JSX.Element => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productData = await Instance.get('templates/ePNAVU1sgGtQ/data');

        if (!productData) return;

        if (productData.status === 200) return setProducts(productData.data);
      } catch (error) {
        console.log('error');
      }
    };

    getProduct();
  }, []);

  return (
    <div>
      {products.map(item => (
        <div key={item.createdAt}>{item.createdAt}</div>
      ))}
    </div>
  );
};

export default Main;
