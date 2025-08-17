
import SectionTitle from '../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';

const TestimonialOne = () => {
    return (
        <div className="section section-padding">
            <div className="container">
                <SectionTitle
                    subtitle="Testimonial"
                    title="What Our Clients Say"
                    description="Haizom Studio designed our prototype PCB and embedded firmware in just two weeks and it worked flawlessly on first run."
                    textAlignment="heading-left"
                    textColor=""
                />
                <div className="row">
                    <TestimonialPropOne colSize="col-lg-4" itemShow="6"/>
                </div>
            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1">
                    <img src={"/images/others/bubble-1.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}


export default TestimonialOne;
