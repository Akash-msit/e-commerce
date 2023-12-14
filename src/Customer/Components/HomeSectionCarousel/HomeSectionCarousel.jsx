import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectioncard from "../HomeSectionCard/HomeSectioncard";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Saree } from "../../../Data/Saree/Saree";



function HomeSectionCarousel({data,sectionName}) {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
      };
      
      const items = data.map((item) => <HomeSectioncard product={item} />);
  const [activIndex, setActiveIndex] = useState(0);
  const sildePrev = () => setActiveIndex(activIndex - 1);
  const sildeNext = () => setActiveIndex(activIndex + 1);

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  return (
    <div className="relative px-5 lg:px-8">
        <h2 className="text-2xl font-semibold py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          responsive={responsive}
          autoPlay
          disableButtonsControls
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activIndex}
        />
      </div>
      {activIndex!==items.length-4 && <Button
        variant="contained"
        className="z-50 bg-white"
        sx={{
          position: "absolute",
          top: "8rem",
          left: "0rem",
          bgcolor: "white",
        }}
        aria-level="next"
        onClick={sildeNext}
      >
        <ChevronLeftIcon sx={{ color: "black" }} />
      </Button>}
      <Button
        variant="contained"
        className="z-50 bg-white"
        sx={{
          position: "absolute",
          top: "8rem",
          right: "0rem",
          bgcolor: "white",
        }}
        aria-level="next"
        onClick={sildePrev}
      >
        <ChevronRightIcon sx={{ color: "black" }} />
      </Button>
    </div>
  );
}

export default HomeSectionCarousel;
