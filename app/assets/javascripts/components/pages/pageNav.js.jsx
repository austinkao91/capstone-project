var PageNav = React.createClass({
  render: function() {
    var pages = [];
    for(var i = this.props.current-2; i < this.props.current + 3; i++) {
      if( i >= 1 && i <= this.props.pageLimit ) {
        pages.push(i);
      }
    }
    return (
      <ul className="page-list">
        {
          pages.map(function(page,idx) {
            var current = "";
            if(page === this.props.current) {
              current = "current";
            }
            return (
              <li className={current + " page-number"}
                  key={idx}
                  onClick={this.props.setPage.bind(null,page)}>
                {page}</li>
            );
          }.bind(this))
        }
      </ul>
    );
  }
});
