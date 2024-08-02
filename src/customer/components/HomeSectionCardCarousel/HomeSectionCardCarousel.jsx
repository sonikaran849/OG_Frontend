import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCardCarousel = ({data= [],SectionName}) => {
    const [activeIndex,setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = ()=>setActiveIndex(activeIndex-1);
  const slideNext = ()=>setActiveIndex(activeIndex+1);

  const syncActiveIndex = ({item})=>setActiveIndex(item)
  
  data = data?.slice(0,10);


  const items = (data || []).map((i) => <HomeSectionCard product={i}/>);

  const itemsLength = items.length;

  return (
    <div className="border">
      <div className="relative p-5">
        <h2 className="text-2xl font-extrabold text-gray-800 py-5">{SectionName}</h2>
        <AliceCarousel
          disableButtonsControls
          items={items}
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== itemsLength-5 && <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
        
        {activeIndex !== 0 && <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCardCarousel;
