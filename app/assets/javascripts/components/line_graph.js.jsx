var LineGraph = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var density = 50;
    var lines = this.props.data.map(function(d, i){
      var x1 = i*density;
      var y1 = d;
      var x2 = i*density+density;
      var y2 = this.props.data[i+1]
      return (
        <g>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black"></line>
          <circle cx={x1} cy={y1} r="5" fill="red"></circle>
          <text x={x1+5} y={y1+3}>{d}</text>
        </g>
        )
    }.bind(this));
    
    return (
      <svg>
        {lines}
      </svg>
    );
  }
});
