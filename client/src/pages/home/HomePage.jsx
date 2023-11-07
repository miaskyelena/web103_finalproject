import React from 'react'
import SearchBar from '../../components/search/SearchBar'
import BannerImage from '../../components/banner/BannerImage'
import ItemView from '../../components/shop/ItemView'
import ItemLiked from '../../components/shop/ItemLiked'
import ItemSelling from '../../components/shop/ItemSelling'
import SellerBanner from '../../components/banner/SellerBanner'
import CustomerReviews from '../../components/shop/CustomerReviews'
import Footer from '../../components/footer/Footer'
import { Container } from 'react-bootstrap'
const HomePage = ({ session }) => {

  return (
    <>
      <SearchBar />
      <BannerImage />
      <ItemView />
      <ItemLiked />
      <SellerBanner />
      <ItemSelling />
      <CustomerReviews />
      <Footer />
    </>
  )
}

export default HomePage