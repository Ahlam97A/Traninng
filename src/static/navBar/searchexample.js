import React from 'react'

import SearchExample from './search'
class Search extends React.Component {
  render() {
    var libraries = [
    
        { name: 'Backbone.js', url: 'https://documentcloud.github.io/backbone/'},
        { name: 'AngularJS', url: 'https://angularjs.org/'},
        { name: 'jQuery', url: 'https://jquery.com/'},
        { name: 'Prototype', url: 'http://www.prototypejs.org/'},
        { name: 'React', url: 'https://facebook.github.io/react/'},
      
    
    ];
 
    return (
        <SearchExample />
     
    );
  }
}
export default Search;
