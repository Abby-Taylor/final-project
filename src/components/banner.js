import Card from 'react-bootstrap/Card';


export default function Banner () {
    return (
        <Card bg="info" text="light">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1567954363518-dec8219a176d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"></Card.Img>
            <Card.Body>
                <Card.Text className="text-center">At Doggo Vacay, we understand how important it is that your 
                four-legged family member has the best. day. EVER! Not some days, but every day. We have been in business
                for 20+ years and look forward to 200 more. We offer single or mulit-day packages, overnight services and
                for when you need to get out of town. You'll spend time away knowing your doggo is well taken care of. 
                Who knows, it may be difficult to get doggo to come home with you when you return. Please visit us for a free tour
                today!</Card.Text>
            </Card.Body>
        </Card>
    );
}