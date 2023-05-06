import { useState } from "react";


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='w-[350px] sm:w-[550px] sm:h-[600px]  md:w-[650px] md:h-[700px] lg:w-[400px] xl:w-[550px] 2xl:w-[700px] flex flex-col items-center justify-center  '>
      <div className="flex w-[300px] sm:w-[500px] md:w-[600px] lg:w-[350px] xl:w-[500px] 2xl:w-[600px] justify-between absolute items-center h-[350px] sm:h-[600px] lg:h-[300px] ">
        <div onClick={goToPrevious} className='text-5xl 2xl:text-6xl text-purple cursor-pointer' >
          ❰
        </div>
        <div onClick={goToNext} className='text-5xl 2xl:text-6xl text-purple cursor-pointer' >
          ❱
        </div>
      </div>
      <div className="">
        <img src={slides[currentIndex].url}  alt='' className="rounded-[20px] object-cover"/>
      </div>
      <div className="flex sm:w-[550px] md:w-[650px] lg:[100px] justify-center gap-1 mt-2 ">
        {slides.map((slide, slideIndex) => {
            return (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                > 
                  <img alt='' src={slide.url} className='w-[50px] h-[50px] border-solid border-slate-200 border-2 rounded-[10px]'  />
                </div>
              )
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
