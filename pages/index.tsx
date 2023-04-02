import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { faker } from '@faker-js/faker';
import { getImages } from '../helpers/mockimages';

import { BadgeType, IProduct } from '@/types';
import ProductList from '@/components/product-list/ProductList';

const ITEMS_PER_PAGE = 12;

export default function Home() {
  const [items, setItems] = useState<IProduct[]>([]);
  const [pageItems, setPageItems] = useState<IProduct[]>([]);

  const router = useRouter();
  const page = (router.query.page as string) || 1;

  useEffect(() => {
    const getProducts = async () => {
      const mockItems: IProduct[] = [];
      const images = await getImages('product', 100);

      for (let i = 0; i < 100; i++) {
        const item: IProduct = {
          id: faker.datatype.uuid(),
          title: faker.commerce.productName(),
          brand: faker.company.name(),
          // Используемый фейкером сайт https://loremflickr.com/ перестал работать,
          // возможно временно, но чтоб наверняка заменил на unsplash
          // imageUrl: faker.image.imageUrl(200, 200, 'product', true),
          imageUrl: images[i],
          badge: Math.random() < 0.5 ? BadgeType.NEW : BadgeType.TOP,
        };

        mockItems.push(item);
      }
      setItems(mockItems);
    };

    getProducts();
  }, []);

  useEffect(() => {
    const start = (+page - 1) * ITEMS_PER_PAGE;
    const end = +page * ITEMS_PER_PAGE;

    setPageItems(items.slice(start, end));
  }, [page, items]);

  return <ProductList title="Доступные товары:" items={pageItems} />;
}
