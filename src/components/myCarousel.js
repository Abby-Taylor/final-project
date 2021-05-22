import Carousel from 'react-bootstrap/Carousel';

export default function MyCarousel () {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1602684379319-1de467ca74e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="First Slide"></img>
                <Carousel.Caption>
                    <h3>Join our other happy dogs and bring your dog for a visit today.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1617994683620-273ed0d58628?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwYXQlMjBwbGF5Z3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Second Slide"/>
                <Carousel.Caption>
                    <h3>Dogs experience outdoor playtime in our doggo playground all day when weather permits.</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="https://images.unsplash.com/photo-1598397678806-f5e6785369cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Third Slide"/>
                <Carousel.Caption>
                    <h3>Your dog will have a safe, quiet space to tucker out.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}