import React  from 'react'
import Header from './header/header';
import BestSeller from './bestSeller/bestSeller';
import HomeProduct from './productsHome/homeProduct'
const market = () => {
    return (
        <div>
            <Header />
            <BestSeller />
            <HomeProduct />
        </div>
 )
}

export default market;
