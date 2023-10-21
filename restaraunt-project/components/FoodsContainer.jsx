import FoodCard from "./FoodCard"
import Footer from "./Footer"
import PurchaseButton from "./PurchaseButton"


function FoodsContainer(){
    return(
        <>
        <input id="searchBar" type="text" placeholder="Sua Pesquisa..." />
        <div id="container">
            <FoodCard
            prato={'Salada'} 
            price={'R$14,90'}>
            <PurchaseButton/>
            </FoodCard>

            <FoodCard
            prato={'Salada'}
            price={'R$14,90'}>
            <PurchaseButton/>
            </FoodCard>

             <FoodCard
            prato={'Salada'} 
            price={'R$14,90'}>
            <PurchaseButton/>
            </FoodCard>

            <FoodCard
            prato={'Salada'}
            price={'R$14,90'}>
            <PurchaseButton/>
            </FoodCard>

             <FoodCard
            prato={'Salada'} 
            price={'R$14,90'}>
            <PurchaseButton/>
            </FoodCard>

            <FoodCard
            prato={'Salada'}
            price={'R$14,90'}>
            <PurchaseButton/>
            </FoodCard>

            <Footer></Footer>
        </div>
      </>
    )
}
export default FoodsContainer