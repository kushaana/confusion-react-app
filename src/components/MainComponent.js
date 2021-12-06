import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  render() {

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route exact path="/menu" element={<Menu dishes={this.state.dishes} />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    )
  };
}

export default Main;
