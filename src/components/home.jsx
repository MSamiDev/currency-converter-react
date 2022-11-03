import Header from "./header";
import Converter from "./converter";
import cover from '../assets/images/cover.png'
const Home = () => {
    return(
        <>
        <Header />
        <div className="coverContainer">
            <img src={cover} alt="" />
        </div>
        <Converter />

        </>
    );
};

export default Home;
