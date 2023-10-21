function FoodCard({prato,price,children}){
    return(
        <>
        <div className="foodCardContainer">
            <div className="foodCard">
                <img src="\src\views\imgs\salad.jpg" alt="" />
            </div>
            <span className="prato">{prato}</span>
            <span className="price">{price}</span>
            {children}
        </div>

        </>
    )
}
export default FoodCard