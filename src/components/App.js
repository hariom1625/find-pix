import React from 'react';
import unsplash from '../api/unsplash.js';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css';
import bckgrnd from "./back-img.jpg";
class App extends React.Component  {
state = {images: []};

onSearchSubmit = async (term) => {
 const response = await unsplash.get('/search/photos',{
params: {query: term},


});
this.setState({ images: response.data.results});
}



render (){
return (
<div className="bg">
  <img className="bck-pic img-fluid" src={bckgrnd} alt="bck-pic" />

<div className="ui container search-bar " >

<SearchBar className="search" onSubmit = {this.onSearchSubmit }/>

</div>
<ImageList images={this.state.images}/>
</div>

);
}
}


export default App;
