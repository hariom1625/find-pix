import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
state = {term: ''};

onFormSubmit = (event) => {
event.preventDefault();


this.props.onSubmit(this.state.term);
};



render() {
return (
<div className= "ui search-segment segment  ">
<form onSubmit = {this.onFormSubmit} className="ui form">
<label className="img-srch">Image Search </label>
<div className="field">
<input type= "text" value={this.state.term} onChange={e => this.setState ({ term: e.target.value})} />
</div>
</form>

 </div>);
}
}

export default SearchBar;
