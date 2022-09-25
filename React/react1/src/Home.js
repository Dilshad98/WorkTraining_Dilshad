import Header from "./Header";
import Footer from "./Footer";
import './Home.css';

function Home(){

    return(
        <div>
            <Header/>
            <div className="banner_pic">
            <img
                className="cupcake_pic"
                src="https://media.istockphoto.com/photos/homemade-vanilla-muffins-with-coconut-powder-pink-background-copy-picture-id1014025668?k=20&m=1014025668&s=612x612&w=0&h=wp7_jAepTcKoB9fVSm5waqpkfC89QXB_MMya-tTpVVA="
                alt="cupcakepic"
            />
            </div>
            <h2>Indulge In Sweetness</h2>

            <div className="cup_list">
            <div>
                <img
                className="cup_1"
                src="https://media.istockphoto.com/photos/cupcake-picture-id641827790?k=20&m=641827790&s=612x612&w=0&h=ZZNwOrJDntg07N8_LWa3RP4ANrq7ZYUKVD4i-ARY4eE="
                alt="cup1"
                />
                <h3>Rose Lychee</h3>
            </div>
            <div>
                <img
                className="cup_2"
                src="https://media.istockphoto.com/photos/blueberry-cupcake-picture-id155154338?k=20&m=155154338&s=612x612&w=0&h=g9Pa5YQafhkt0bUQZwlyipcCh1r4OfuRo9a_Qpv-6bw="
                alt="cup2"
                />
                <h3>Blueberry</h3>
            </div>
            <div>
                <img
                className='cup_3'
                src="https://media.istockphoto.com/photos/red-velvet-cupcake-picture-id477227048?k=20&m=477227048&s=612x612&w=0&h=3dnReON9kWhRbTVexTdodHccfkWZ3xhkHsVGgROLPxs="
                alt="cup3"
                />
                <h3>Red Velvet</h3>
            </div>
            </div>
            <div className='viewmore'>
            <a href="ProductList" className='btn_viewmore' target="_blank">
                View More
            </a>
            </div>
          <Footer/>
        </div>
    )
}
export default Home;