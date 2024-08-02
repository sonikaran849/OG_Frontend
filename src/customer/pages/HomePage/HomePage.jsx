import React, { useEffect } from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCardCarousel from "../../components/HomeSectionCardCarousel/HomeSectionCardCarousel";
import { mens_Tees } from "../../../Data/mens_Tees";

import { useDispatch, useSelector } from "react-redux";
import {findProductsTees } from "../../../State/Product/Action";
import { findProductsJeans } from "../../../State/Jeans/Action";
import { findProductsJackets } from "../../../State/Jacket/Action";
import { findProductsSweaters } from "../../../State/Sweater/Action";
const HomePage = () => {
  const dispatch = useDispatch();
  const {customersProduct} = useSelector((store)=> store);
  const {jeans} = useSelector((store)=> store);
  const {jackets} = useSelector((store)=> store);
  const {sweaters} = useSelector((store)=> store);
  useEffect(()=>{
    dispatch(findProductsTees());
    dispatch(findProductsJeans());
    dispatch(findProductsJackets());
    dispatch(findProductsSweaters());
  },[])

  const tees = customersProduct?.products?.content;
  const Jeans = jeans?.products?.content;
  const Jackets = jackets?.products?.content;
  const Sweaters = sweaters?.products?.content;
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCardCarousel data={tees} SectionName={"Men's Oversized Tees"}/>
        <HomeSectionCardCarousel data={Jeans} SectionName={"Men's Jeans"}/>
        <HomeSectionCardCarousel data={Jackets} SectionName={"Men's Jacket"} />
        <HomeSectionCardCarousel data={Sweaters} SectionName={"Men's Sweater"} />
      </div>
    </div>
  );
};

export default HomePage;
