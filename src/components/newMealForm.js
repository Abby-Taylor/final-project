import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import React from "react";

export default class NewMealForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: '',
      amount: '',
    };
    this.onMealChange = this.onMealChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onMealChange(event) {
    this.setState({ meal: event.target.value });
  }
  onAmountChange(event) {
    this.setState({ amount: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.props.dog.meals);
    this.props.dog.meals.push({ meal: this.state.meal, amount: this.state.amount })
    this.props.editDog(this.props.dog);
    this.setState({ meal: "", amount: "" });
  }
  render() {
    return (
      <div>
        <h4>Feed this dog:</h4>
        <Form>
          <Form.Control
            type="meal"
            placeholder="Meal"
            value={this.state.meal}
            onChange={this.onMealChange}
          ></Form.Control>
          <Form.Control
            type="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          ></Form.Control>
          <Button variant="info" onClick={this.onSubmit}>
            Add Meal
          </Button>
        </Form>
      </div>
    );
  }
}
