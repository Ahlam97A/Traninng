import React, { Component } from 'react';
import SingleLineGridList from '../Gridlist/GridList'
import AdvancedGridList from '../Gridlist/GridLit3'
import ScrollableTabsButtonForce from './Tabs'
class Home extends React.Component {
  render() {
    return (
      <div >
        <br />
       
        <SingleLineGridList />
        <br /><br />
        <AdvancedGridList />
        <br /><br />        
      </div>
    );
  }
}

export default Home;
