import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CheckInForm from "./checkInForm";
import NewMealForm from "./newMealForm";
import { dogsApi } from "../rest/dogListApi";

export default class DogList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      meals: [],
    };
    this.addNewDog = this.addNewDog.bind(this);
    this.deleteDog = this.deleteDog.bind(this);
    this.editDog = this.editDog.bind(this);
    this.fetchDogs = this.fetchDogs.bind(this);
  }
  componentDidMount() {
    this.fetchDogs();
  }
  async fetchDogs() {
    const responses = await dogsApi.get();
    this.setState({ dogs: responses });
  }
  async addNewDog(dog) {
    await dogsApi.create(dog);
    this.fetchDogs();
  }
  async deleteDog(id) {
    await dogsApi.delete(id);
    this.fetchDogs();
  }
  async editDog(updatedDog) {
    await dogsApi.put(updatedDog);
    this.fetchDogs();
  }
  render() {
    return (
      <div className="container">
        <CheckInForm addNewDog={this.addNewDog} />
        <br />
        {this.state.dogs.map((dog) => (
          <Card className="container col-sm-8 p-0">
            <Card.Header key={dog._id}>
              {dog.dog}{" "}
              <Button variant="danger" onClick={() => this.deleteDog(dog._id)}>
                Delete Record
              </Button>
            </Card.Header>
            <Card.Body>
              <Card.Text key={dog._id}>
                <ul > {dog.meals.map(meal => <li> Meal: {meal.meal}, Amount: {meal.amount}</li>)}
                  {/* <li key={dog._id}>{dog.meals.length > 0 ? dog.meals.map(meal => JSON.stringify(meal)) : "List of Dog Meals will go here"}</li> */}
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <NewMealForm dog={dog} editDog={this.editDog} />
            </Card.Footer>
          </Card>
        ))}
      </div>
    );
  }
}
