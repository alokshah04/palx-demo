import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';
import SearchBar from '../partials/SearchBar';

function Product() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />
      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>
      </main>
      <SearchBar />
      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Product;