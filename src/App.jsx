import image1 from '../src/assets/images/anchor.webp';
import image2 from '../src/assets/images/boat.webp';
import image3 from '../src/assets/images/fishing.webp';
import image4 from '../src/assets/images/lighthouse.webp';
import image5 from '../src/assets/images/reef.webp';
import { Carousel } from './components/carousel';

 const IMAGES=[image1,image2,image3,image4,image5];
function App() {
  return (
    <>
      <Carousel imageUrls={IMAGES}/>
    </>
  )
}

export default App
