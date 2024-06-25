import { Outlet } from "react-router-dom";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const Home = () => {
  return (
    <div className="w-full h-full">
      <Header></Header>
      <Outlet>
        
      </Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;