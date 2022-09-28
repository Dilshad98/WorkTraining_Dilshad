import Footer from "./Footer"
import Header from "./Header"
import {useState } from 'react';

function Products(){


    const [productList,setProductList] = useState([
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/shoes1.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/shoes2.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/shoes3.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/shoes4.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/shoes5.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/tisat1.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/tisat2.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/tisat3.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/tisat4.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/tisat5.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/mix1.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/mix2.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/mix3.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/mix4.png"},
        {"name":"Short Openwork Cardigan","price":"$120.00","img":"images/mix5.png"}
     ]);
    return(
        <>
            <Header/>
            <div className="blue_bg">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Featured Products</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div id="project" className="project">
                <div className="container">
                
                
                    <div className="row">
                    <div className="product_main">
                    
                    {
                        productList.map((obj,index)=>{
                        return(

                            <div className="project_box " key={index}>
                                <div className="dark_white_bg" ><img  src={obj.img} alt="#"/></div>
                                <h3>{obj.name}{obj.price}</h3>
                            </div>
                        )
                        })
                     }    
                    <div className="col-md-12">
                        <a className="read_more" href="#">See More</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </>
    )
}
export default Products