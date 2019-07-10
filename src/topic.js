import React from 'react'
import Grid1 from './component/Gridlist/Grid1'
import components from './page'

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: '',
    }
  }


  render() {
    const { id } = this.props.match.params;
    const PageComponent = components.find(comp => comp.id === id).component;

    return (
      <div>
       
        <PageComponent/>
        <h1>{this.props.match.params.id}</h1>
      </div>
    )
  }


}