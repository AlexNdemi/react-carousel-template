import { useState,useRef,useEffect} from 'react';
import './carousel.css';
import PropTypes from 'prop-types';
export const Carousel = ({imageUrls}) => {
    const [imageIndex,setImageIndex]=useState(0);
    const trackRef=useRef(null);
    const slideWidthRef = useRef(0);
    useEffect(() => {
        const slides = Array.from(trackRef.current.children);
        slideWidthRef.current= slides[0].getBoundingClientRect().width;
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidthRef.current * index + 'px';
          };
      
          slides.forEach(setSlidePosition);
      }, [imageUrls]);
      const moveSlides = (targetSlide) => {
        const track = trackRef.current;
        track.style.transform = `translateX(-${slideWidthRef.current * targetSlide}px)`;
      };
      useEffect(() => {
        const track = trackRef.current;
        track.style.transform = `translateX(-${slideWidthRef.current * imageIndex}px)`;
      }, [imageIndex]);
    
    function showPrevImage(){
        setImageIndex(index=>{
            if(index===0) return imageUrls.length - 1;
            moveSlides(index -1);
            return index - 1;
        })

    }
    function showNextImage(){
        setImageIndex(index=>{
            if(index==imageUrls.length - 1) return 0;
            moveSlides(index +1);
            return index + 1;
        })
    }
    const handleIndicatorClick = (index) => {
        setImageIndex(index);
      };
  return (
    <div className="carousel">
        <button 
            className={
                `carousel__button carousel__button--left ${ !imageIndex?'is-hidden':''}`
            } 
            onClick={showPrevImage}>
            <img src="images/left-arrow.png"/>
        </button>
        <div className="carousel__track-container">
            <ul className="carousel__track" role="list" ref={trackRef}>
                {imageUrls.map((url,index)=>(
                    
                    <li 
                        key={index} 
                        className={`carousel__slide ${imageIndex===index?'current-slide':''}`}
                        >
                        <img 
                            className="carousel__image" 
                            src={url} 
                            alt=""/>
                    </li>
                ))}
            </ul>
        </div>
        <button 
            className={
                `carousel__button carousel__button--right ${ imageIndex==imageUrls.length-1?'is-hidden':''}`
            } 
            onClick={showNextImage}>
            <img src="images/right-arrow.png"/>
        </button>
        <div className="carousel__nav">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className={`carousel__indicator ${
              imageIndex === index ? 'current-slide' : ''
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}
Carousel.propTypes={
    imageUrls:PropTypes.array
};
