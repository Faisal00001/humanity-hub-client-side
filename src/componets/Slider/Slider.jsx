import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../../assets/slider/slider1.jpg";
import img2 from "../../assets/slider/slider2.jpg";
import img3 from "../../assets/slider/slider3.jpg";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider = () => {
    return (
        <div>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
                animation="cubeAnimation">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    {
                        <img src={img2} alt="" />
                    }
                </div>
                <div>
                    {
                        <img src={img3} alt="" />
                    }
                </div>

            </AutoplaySlider>
        </div>
    );
};

export default Slider;