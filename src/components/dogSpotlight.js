import Card from 'react-bootstrap/Card';

export default function DogSpotlight () {
    return (
        <div className="row">
            <Card className="col-sm-6 p-0 text-center" >
                <Card.Img width="200" height="450" variant="top" src="https://images.unsplash.com/photo-1560330530-c2a9d793a70b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwYXQlMjBwbGF5Z3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></Card.Img>
                <Card.Body>

                    <Card.Title>Doggo of the Week!</Card.Title>
                    <Card.Text>Tucker came to use as a shy, introvert. He wasn't sure what to expect but after some pool time
                        he warmed up to his new friends. Now he can't wait to come to daycare and sometimes doesn't want to leave
                        at the end of the day. We are so glad you found us, Tucker! We are lucky to play with you every day.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="col-sm-6 p-0 text-center">
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1590527844234-563331a1d02c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></Card.Img>
                <Card.Body>

                    <Card.Title>Review of the Week!</Card.Title>
                    <Card.Text>You won't find a better doggy daycare around! Our dogs have been going for years
                        and we could not be happier. You won't regret taking your dog for a visit.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    );
}