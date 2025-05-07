import "./Home.css";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Collection from "../components/Collection";

export default function Home() {
    return <div className="container">
        <div className="home-container">
            <Header title="Home" /> 
            <Slideshow title="Slideshow" /> 
            <Collection title="Collection" />
            <Footer title="Footer" />
        </div>
    </div>
  }