import FoodCard from "./FoodCard"


function FoodsContainer(){
    return(
        <>
        <input id="searchBar" type="text" placeholder="Sua Pesquisa..." />
        <div id="container">
            <FoodCard
            prato={'Salada'} 
            price={'R$14,90'}></FoodCard>

            <FoodCard 
            price={'R$14,90'}></FoodCard>

            <FoodCard 
            price={'R$14,90'}></FoodCard>

            <FoodCard 
            price={'R$14,90'}></FoodCard>

            <FoodCard 
            price={'R$14,90'}></FoodCard>

            <FoodCard 
            price={'R$14,90'}></FoodCard>
            
            <FoodCard 
            price={'R$14,90'}></FoodCard>
           
        </div>
      </>
    )
}
export default FoodsContainer