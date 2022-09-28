import Footer from "./Footer";
import Header from "./Header";

import {useState } from 'react';
function Home(){

    const [categoryList,setCategoryList] = useState([
        {"name":"Shoes","image":"images/shoes.png"},{"name":"underwear","image":"images/underwear.png"},
        {"name":"Pante & socks","image":"images/underwear.png"},{"name":"T-shirt & tankstop","image":"images/t_shart.png"},
        {"name":"cardigans & jumpers","image":"images/jakit.png"},{"name":"Top & hat","image":"images/helbet.png"}
        
     ]);

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
            {/* Banner */}
            <section className="banner_main">
                <div className="container">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="text-bg">
                            <h1> <span className="blodark"> Romofyi </span> <br/>Trands 2019</h1>
                            <p>A huge fashion collection for ever </p>
                            <a className="read_more" href="#">Shop now</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ban_img">
                            <figure><img src="images/ban_img.png" alt="#"/></figure>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            {/* six box banner */}
            <div className="six_box">
                <div className="container-fluid">
                    <div className="row">
                        {
                            categoryList.map((obj,index)=>{
                                return(

                                    <div className="col-md-2 col-sm-4 pa_left" key={index}>
                                        <div className="six_probpx yellow_bg">
                                            <i><img src={obj.image} alt="#"/></i>
                                            <span>{obj.name}</span>
                                        </div>
                                    </div>
                                )
                            })
                           
                        }
                    </div>
                </div>
            </div>


            <div id="project" className="project">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Featured Products</h2>
                        </div>
                    </div>
                    </div>
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

            {/* Fashion section */}
            <div className="fashion">
                <img src="images/fashion.jpg" alt="#"/>
            </div>


            {/* News Section */}
            <div className="news">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Letest News</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 margin_top40">
                        <div className="row d_flex">
                            <div className="col-md-5">
                                <div className="news_img">
                                <figure><img src="images/news_img1.jpg"/></figure>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="news_text">
                                <h3>Specimen book. It has survived not only five</h3>
                                <span>7 July 2019</span> 
                                <div className="date_like">
                                    <span>Like </span><span className="pad_le">Comment</span>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 margin_top40">
                        <div className="row d_flex">
                            <div className="col-md-5">
                                <div className="news_img">
                                <figure><img src="images/news_img2.jpg"/></figure>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="news_text">
                                <h3>Specimen book. It has survived not only five</h3>
                                <span>7 July 2019</span> 
                                <div className="date_like">
                                    <span>Like </span><span className="pad_le">Comment</span>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 margin_top40">
                        <div className="row d_flex">
                            <div className="col-md-5">
                                <div className="news_img">
                                <figure><img src="images/news_img3.jpg"/></figure>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="news_text">
                                <h3>Specimen book. It has survived not only five</h3>
                                <span>7 July 2019</span> 
                                <div className="date_like">
                                    <span>Like </span><span className="pad_le">Comment</span>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div  className="newslatter">
                <div className="container">
                    <div className="row d_flex">
                    <div className="col-md-5">
                        <h3 className="neslatter">Subscribe To The Newsletter</h3>
                    </div>
                    <div className="col-md-7">
                        <form className="news_form">
                            <input className="letter_form" placeholder=" Enter your email" type="text" name="Enter your email"/>
                            <button className="sumbit">Subscribe</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>


            {/* Three Box Section */}

            <div className="three_box">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="images/icon_mony.png"/></i>
                            <span>Money Back</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="images/icon_gift.png"/></i>
                            <span>Special Gift</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gift_box">
                            <i><img src="images/icon_car.png"/></i>
                            <span>Free Shipping</span>
                        </div>
                    </div>
                    </div>
                </div>
             </div>
            <Footer/>
        </>
    )
}
export default Home;