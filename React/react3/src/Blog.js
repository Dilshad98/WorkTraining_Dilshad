import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Blog(){

    const [blogList,setBlogList] = useState([
        {"blogTitle":"NEW CHILLS FOR SUMMER","content":"You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.",
        "date":"November 28, 2023","username":"Admin","img":"images/new-chills.png"},

        {"blogTitle":"BERRIES ON THE GROVE","content":"You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template.",
        "date":"November 28, 2023","username":"Admin","img":"images/berries.png"},

        

    ])
    return(
        <>
            <Header menuname="Blog"/>

            <div id="body">
                <div className="header">
                    <div>
                        <h1>Blog</h1>
                    </div>
                </div>
                <div className="blog">
                    <div className="featured">
                        <ul>

                            {
                                blogList.map((obj,index)=>{
                                    return(
                                        <li key={index}>
                                            <img src={obj.img} alt=""/>
                                            <div>
                                                <h1>{obj.blogTitle}</h1>
                                                <span>By {obj.username} on {obj.date}</span>
                                                <p>{obj.content}</p>
                                                <a href="/SinglePost" className="more">Read More</a>
                                            </div>
                                         </li>
                                    )
                                })
                            }
                            
                        </ul>
                        <a href="/Blog" className="load">Load More</a>
                    </div>
                    <div className="sidebar">
                        <h1>Recent Posts</h1>
                        <img src="images/on-diet.png" alt=""/>
                        <h2>ON THE DIET</h2>
                        <span>By Admin on November 28, 2023</span>
                        <p>You can replace all this text with your own text. You can remove any link to our website from this website template.</p>
                        <a href="/SinglePost" className="more">Read More</a>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
export default Blog;