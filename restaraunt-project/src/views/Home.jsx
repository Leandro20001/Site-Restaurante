import NavBar from "../../components/navBar"



function Home(){
    return(
        <>
        <NavBar></NavBar>
        <span id="logo">Le Restaraunt</span>
            <div id="menu">
            <span id="menuSpan">Avaliações De Especialistas</span>
            </div>

            <div className="menuImg">
                    <img src="background 2.\src\views\imgs\jpg"alt=""/>
            </div>
            
            <div className="menuImg">
                <img src="\src\views\imgs\salad.jpg" alt="" />
            </div>

            <div className="menuImg">
                <img src="\src\views\imgs\salad.jpg" alt="" />
            </div>
        

        </>
    )
}
export default Home