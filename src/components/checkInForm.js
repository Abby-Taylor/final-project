import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React from "react";

export default class CheckInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dog: "",
      meals: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ dog: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.addNewDog({ dog: this.state.dog, meals: this.state.meals });
    this.setState({ dog: "" });
  }
  render() {
    return (
      <Form>
        <Col>
          <Form.Label>
            <strong>Enter dog's name to check them in and track meals during their stay:</strong>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Dog name"
            value={this.state.dog}
            onChange={this.onChange}
          ></Form.Control>
        </Col>
        <Col>
          <Button variant="success" onClick={this.onSubmit}>
            Check In!
          </Button>
        </Col>
      </Form>
    );
  }
}
