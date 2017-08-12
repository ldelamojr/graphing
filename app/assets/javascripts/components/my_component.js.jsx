var MyComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },
  getInitialState: function() {
    // @name = name
    return { name: this.props.name};
  },
  doSomething: function() {
    this.setState({name: "Shawn"})
    if (this.state.name == "Shawn") {
      this.setState({name: "Jaden"});
    } else {
      this.setState({name: "Shawn"});
    }
    
  },
  render: function() {
    return (
      <div>
        <h1>Hello {this.state.name} {this.state.lname}</h1>
        <button onClick={this.doSomething}>Hello</button>
      </div>
    );
  }
});



// class MyComponent
//  def initialize(name)
//    @name = name
//  end

//  def render
//  "<h1>#{@name}</h1>"
//  end
// end