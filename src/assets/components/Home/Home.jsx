import { Outlet, useNavigation } from "react-router-dom";
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const Home = () => {
  const navigation = useNavigation();
  return (
    <div className="w-full h-full">
      <Header></Header>
      {
        navigation.state === "loading"
          ?
          <span className="loading loading-spinner text-[#4D6BF2] loading-lg absolute top-2/4 left-2/4"></span>
          :
          <Outlet></Outlet>
      }

      <Footer></Footer>
    </div>
  );
};

export default Home;