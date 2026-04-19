"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

interface ProductImagesSliderProps {
  images: string[];
}

export default function ProductImagesSlider({
  images,
}: ProductImagesSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 rounded-xl flex items-center justify-center">
        No images available
      </div>
    );
  }

  return (
    <div className="product-gallery space-y-4">
      <div className="main-swiper ">
        <Swiper
          modules={[Thumbs, Navigation]}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={0}
          loop={true}
          scrollbar={{ draggable: true }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Product image ${index + 1}`}
                className=" max-h-[calc(100vh-80px)] object-contain mx-auto"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="thumbs-swiper ">
        <Swiper
          onSwiper={setThumbsSwiper} //بتاخد instance من الاسلايد وتحفظه في state علشان  تربطه بالسلايد الكبيير
          modules={[FreeMode, Thumbs]} //علشان ازامن بين السلايدر الكبير والثامبنيلز
          watchSlidesProgress={true}
          freeMode={true}
          spaceBetween={0}
          slidesPerView={3.5}
          centeredSlides={false}
          centeredSlidesBounds={true}
          slideToClickedSlide={true} // علشان لما اضغط علي صوره السلايد يتحرك لصوره دي
          loop={false}
          speed={400} // سرعه الانتقال
          onClick={(swiper) => swiper.slideTo(swiper.clickedIndex)} // علشان يضمن الحركه 100%
          threshold={5} // علشان يميز بين الحركه الصغيره الي بتحصل بسبب الكليك والحركه الكبيره اللي بتحصل بسبب الاسلايد علشان لو صغيره ميحركش الاسلايد
          // لو الحركه اقل من 5px يعتبرها كليك

          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 0,
            },

            1024: {
              slidesPerView: 2.3,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 3.3,
              spaceBetween: 0,
            },
          }}
          className="thumbs  text-center width-1/2 lg:w-full mx-auto"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="">
              <div className="cursor-pointer w-full    border-4 m-0.5 border-transparent hover:border-[#337ab7] transition-all  overflow-hidden">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className=" max-h-[134px] min-h-[104px]  mx-auto aspect-auto object-contain  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
