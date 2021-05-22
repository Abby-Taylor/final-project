import React from 'react';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import MyNavbar from './components/myNavbar';
import Footer from './components/footer';
import Banner from './components/banner';
import MyCarousel from './components/myCarousel';
import 'bootstrap/dist/css/bootstrap.css';
import DogSpotlight from './components/dogSpotlight';
import PricingTable from './components/pricingTable';
import ServicesCarousel from './components/servicesCarousel';
import DogList from './components/dogList';


export default class App extends React.Component {
  render () {
    return (
      <Container fluid className="p-0">
        <Router>
          <MyNavbar />
          <Switch>
            <Route path="/pricing">
              <ServicesCarousel />
              <PricingTable />
            </Route>
            <Route path="/employeeportal">
              <h2>Employee Portal</h2>
              <DogList />
            </Route>
            <Route path="/">
              <Banner />
              <MyCarousel />
              <DogSpotlight />
            </Route>

          </Switch>
        </Router>
        <Footer />
      </Container>
    )
  }
}
