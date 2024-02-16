
import Pot from "../../../assets/pot.png"
import Bagone from "../../../assets/bagone.png"
import Itemone from "../../../assets/itemone.png"
import Bagtwo from "../../../assets/bagtwo.png"
import Sunglass from "../../../assets/sunglass.png"
import Hat from "../../../assets/hat.png"
import Clock from "../../../assets/clock.png"
import Toy from "../../../assets/toy.png"

import React, { useState } from "react";
import Flex from "../../Flex";
import Product from "../../Product";
import Image from "../../Image"
import arrow from "../../../assets/down_arrow.jpg"
import Paragraph from "../../Paragraph"
import Input from "../../Input"
import { CiGrid41 } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom"
const ShopProduct = () => {
  const [product, setProduct] = useState([
    {
      title: "Title One",
      price: 500,
      img:Hat
    },
    {
      title: "Title Two",
      price: 300,
      img:Bagtwo
    },
    {
      title: "Title Three",
      price: 200,
      img:Itemone
    },
    // {
    //   title: "Title Four",
    //   price: 100,
    //   img:Bagone
    // },
    // {
    //   title: "Title One",
    //   price: 500,
    //   img:Pot
    // },
    // {
    //   title: "Title Two",
    //   price: 300,
    //   img:Sunglass
    // },
    // {
    //   title: "Title Three",
    //   price: 200,
    //   img:Clock
    // },
    // {
    //   title: "Title Four",
    //   price: 100,
    //   img:Toy
    // },
  ]);
  return (
    <>
    <div className="flex justify-between items-center mb-7 ml-5">
      <div className="flex gap-3">

       <Link to="" className="hover:bg-green-400 text-[20px] px-2 py-2"><CiGrid41 /></Link> 

        <Link to="" className="hover:bg-green-400 text-[20px] px-2 py-2"><FaList/></Link>
      </div>
      <div className="flex gap-10">
      <div className="flex items-center relative ">
        <Paragraph text="Short by:" className="mr-3"/>
        <Input inType="text" inPh="Featured" className="border px-2 py-1"/>
        <Image src={arrow} className="h-1 absolute top-4 right-3"/>
      </div>
      <div className="flex items-center relative ">
        <Paragraph text="Show:" className="mr-3"/>
        <Input inType="number" inPh="36" className="border px-2 py-1"/>
        {/* <Image src={arrow} className="h-1 absolute top-4 right-3"/> */}
      </div>
      </div>
    </div>

    <div>
    <Flex >
      
        <div className='w-[1228px] pl-5'>
        <Flex className="justify-between">
          {product.map((el, index) => (
            <div className="" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                
              />
            </div>
          ))}
           </Flex>
           <Flex className="justify-between">
          {product.map((el, index) => (
            <div className="" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                
              />
            </div>
          ))}
           </Flex>
           <Flex className="justify-between">
          {product.map((el, index) => (
            <div className="" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                
              />
            </div>
          ))}
           </Flex>
           <Flex className="justify-between">
          {product.map((el, index) => (
            <div className="" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                
              />
            </div>
          ))}
           </Flex>
        </div>
      </Flex>
    </div>
    </>
  )
}

export default ShopProduct