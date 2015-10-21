var ImageIndex = React.createClass({
  render: function() {
    if( this.props.images.length > 0 ) {
      var images;
      if(typeof this.props.limit === "undefined") {
        images = this.props.images;
      } else {
        images = this.props.images.slice(0,this.props.limit);
      }
      return(
        <ul className="image-list">
          {
            images.map(function(image,idx) {
              return <li key={idx}><img src={image.name}/></li>;
            })
          }
        </ul>
      );
    } else {
      return (
        <ul className="image-list">
          {
            <img src="http://res.cloudinary.com/dnifqmdlf/image/upload/v1444929813/images_ohgzbq.png"/>
          }
        </ul>
      );
    }
  }
});
