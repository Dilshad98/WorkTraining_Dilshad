import Header from './Header';
import Footer from './Footer';
import './ProductList.css';
function ProductList(){
    return(
        <div>
            <Header/>
              {/* Main Context  */}
            <h2>Product List</h2>

            <div className="cup_list">
            <div className="cup1_1">
                <img
                className="cup_1"
                src="https://media.istockphoto.com/photos/cupcake-picture-id641827790?k=20&m=641827790&s=612x612&w=0&h=ZZNwOrJDntg07N8_LWa3RP4ANrq7ZYUKVD4i-ARY4eE="
                alt="cup1"
                />
                <h3>Rose Lychee</h3>
            </div>
            <div className="cup2_2">
                <img
                className="cup_2"
                src="https://media.istockphoto.com/photos/blueberry-cupcake-picture-id155154338?k=20&m=155154338&s=612x612&w=0&h=g9Pa5YQafhkt0bUQZwlyipcCh1r4OfuRo9a_Qpv-6bw="
                alt="cup2"
                />
                <h3>Blueberry</h3>
            </div>
            <div>
                <img
                className="cup_3"
                src="https://media.istockphoto.com/photos/red-velvet-cupcake-picture-id477227048?k=20&m=477227048&s=612x612&w=0&h=3dnReON9kWhRbTVexTdodHccfkWZ3xhkHsVGgROLPxs="
                alt="cup3"
                />
                <h3>Red Velvet</h3>
            </div>
            <div>
                <img
                className="cup_4"
                src="https://media.istockphoto.com/photos/salted-caramel-cupcake-picture-id909324594?k=20&m=909324594&s=612x612&w=0&h=9Zj0WoPSDOa8rRbXfDn-NvHxV4na2CEzCqF1CtnVxGM="
                alt="cup4"
                />
                <h3>Salted Caramel</h3>
            </div>
            <div>
                <img
                className="cup_5"
                src="https://media.istockphoto.com/photos/gourmet-strawberry-and-vanilla-cupcake-on-white-background-picture-id1300197527?k=20&m=1300197527&s=612x612&w=0&h=GySznRU-zoQ_f-AI9jzmdaaFb2nb4WqjnZ5oE70k-ts="
                alt="cup5"
                />
                <h3>Strawberry Cheesecake</h3>
            </div>
            
            
            <div>
                <img
                className="cup_6"
                src="https://media.istockphoto.com/photos/vanilla-cupcake-with-lemon-whipped-cream-frosting-and-chocolate-picture-id1371535860?k=20&m=1371535860&s=612x612&w=0&h=oREGGZqWAAw8tTR3hdoIkXMwewnQIWBppUOsyJYS04Y="
                alt="cup6"
                />
                <h3>Lemon Chocolate</h3>
            </div>
            <div>
                <img
                className="cup_7"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYoT2xJ_u0AXOqKqxyRzer8P7cLYQLKfY1Ck_tTscdKufQ0i00zIZsMdwqQIY_Cxk5OIo&usqp=CAU"
                alt="cup7"
                />
                <h3>Cookie & Cream</h3>
            </div>
            <div>
                <img
                className="cup_8"
                src="https://media.istockphoto.com/photos/cupcake-picture-id819456268?k=20&m=819456268&s=612x612&w=0&h=7Y5P-KYr9DX5pb8wyMpoFjDYRotQfBVD0fckV9LXwZc="
                alt="cup8"
                />
                <h3>Vanilla</h3>
            </div>
            
            </div>
            <Footer/>
        </div>
    )
}
export default ProductList;