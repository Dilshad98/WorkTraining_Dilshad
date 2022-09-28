import Footer from "./Footer";
import Header from "./Header";

function Fashion(){
    return(
        <>
            <Header/>
            <div className="blue_bg">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Fashion</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* fashion section */}
            <div className="fashion">
                <img src="images/fashion.jpg" alt="#"/>
            </div>
            <Footer/>
        </>

    )

    
    
}
export default Fashion;