import NavBar from "../../components/navBar"
import Footer from "../../components/Footer"



function Home(){
    return(
        <>
        <NavBar></NavBar>
        <span id="logo">Le Restaraunt</span>
            <div id="menu">
            <span id="menuSpan">Avaliações De Especialistas</span>
            </div>


                <section className="reviewSection">
                    <div className="menuImg">
                            <img src="\src\views\imgs\background 2.jpg"alt=""/>
                    </div>
                    <span className="review">
                        "A Melhor Pizza Do Brasil"
                        ⭐5,0
                        </span>
                </section>
                
                <section className="reviewSection">
                    <div className="menuImg">
                        <img src="\src\views\imgs\lasanha.jpg" alt="" />
                    </div>
                    
                    <span className="review">
                        "Uma Maravilha!."
                        ⭐4,5
                        </span>
                </section>

                <section className="reviewSection">
                    <div className="menuImg">
                        <img src="\src\views\imgs\salad.jpg" alt="" />
                    </div>

                    <span className="review">
                        ""Prato Leve E Saboroso.""
                        ⭐4,5
                    </span>
                </section>
                <Footer/>
                
        

        </>
    )
}
export default Home