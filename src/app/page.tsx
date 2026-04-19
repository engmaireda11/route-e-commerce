import Image from "next/image";
import Swipper from "./_component/swipper/Swipper";
import HomeCategory from "./_component/homeCategory/HomeCategory";
import HomeProducts from "./_component/Product/HomeProducts";

export default function Home() {
  return (
    <>

    <Swipper/>
    <HomeCategory/>
    <HomeProducts/>
    
    </>
   
  )
}

