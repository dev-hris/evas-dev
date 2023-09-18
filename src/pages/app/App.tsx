import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import {PATH} from '../../utils/constants/routeConstants';
import {LayoutVariant} from '../../utils/constants/layoutVariantEnum';

import Home from '../home/Home';
import Fraijour from '../fraijour/Fraijour';
import Layout from '../../layout/Layout';
import ProductsLine from '../productsLine/ProductsLine';
import Product from '../product/Product';
import {LoadingScreen} from '../loadingScreen/LoadingScreen';

export const App: React.FunctionComponent = () => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path={PATH.home}
        element={
          <Layout variant={LayoutVariant.Main}>
            <Home/>
          </Layout>
        }
      />
      <Route
        path="/preloader"
        element={
          <LoadingScreen/>
        }
      />
      <Route
        path={PATH.fraijour}
        element={
          <Layout variant={LayoutVariant.Brand}>
            <Fraijour />
          </Layout>
        }
      />

      <Route
        path={'/:lineProduct'}
        element={
          <Layout variant={LayoutVariant.Brand}>
            <ProductsLine />
          </Layout>
        }
      />

      <Route
        path={'/:lineProduct/:product'}
        element={
          <Layout variant={LayoutVariant.Brand}>
            <Product />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
