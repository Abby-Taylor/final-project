import Carousel from 'react-bootstrap/Carousel';

export default function ServicesCarousel () {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1611173622933-91942d394b04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="First Slide"></img>
                <Carousel.Caption>
                    <h3>Ask about our add-on grooming services.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Second Slide"/>
                <Carousel.Caption>
                    <h3>We offer extra walks outside the facility during your dogs stay with us.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1562176552-b512ffac91fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Third Slide"/>
                <Carousel.Caption>
                    <h3>We are the only doggy daycare in the area that offers pool play-time.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}