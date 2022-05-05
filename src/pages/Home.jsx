import { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import { CategoryList } from '../components/CategoryList';
import { Preloader } from '../components/Preloader';

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>
      {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}
    </>
  );
}

export { Home };
