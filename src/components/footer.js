import Card from 'react-bootstrap/Card';


export default function Footer () {
    return (
        <Card bg="info" text="light" className="text-center" sticky="bottom">
            <Card.Header>Our Locations:</Card.Header>
            <Card.Body>12345 Doggy Street Omaha, NE 68112</Card.Body>
            <Card.Text>- - -</Card.Text>
            <Card.Text>Midtown Location: Coming Soon!</Card.Text>
        </Card>
    );
}
