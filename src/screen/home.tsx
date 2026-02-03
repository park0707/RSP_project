
import Header from "./home_parts/header.tsx";
import Body from "./home_parts/body.tsx";
export default function Home() {
    
    return (
        <div className="bg-base-color w-screen h-screen" >
              <Header />
              <div className="w-screen justify-center items-center flex">
                <Body  />
              </div>
        </div>
    );
}