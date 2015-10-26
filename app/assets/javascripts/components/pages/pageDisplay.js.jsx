var PageDisplay = React.createClass({
  render: function() {
    var pageLimit = Math.ceil(this.props.pageNum/this.props.showing);
    return (
      <div className="page-display group">
        <div className="page-display-content group">
          <p>
            Page {this.props.currentPage} of {pageLimit}
          </p>
          <div className="page-nav group">
            <PageButton
              current={this.props.currentPage}
              pageLimit={pageLimit}
              action={this.props.prevPage}
              mark="prev"/>
            <PageNav
              setPage={this.props.setPage}
              current={this.props.currentPage}
              pageLimit={pageLimit}
              pageNum={this.props.pageNum}/>
            <PageButton
              current={this.props.currentPage}
              pageLimit={pageLimit}
              action={this.props.nextPage}
              mark="next"/>
          </div>
        </div>
      </div>
    );
  }
});
