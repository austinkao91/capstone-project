var CloudinaryUploader = React.createClass({
  imageUploader: function(event) {
    event.preventDefault();

    cloudinary.openUploadWidget(window.CLOUDINARY_OPTIONS,
      this.uploadImage) ;
  },
  uploadImage: function(error, result) {
    if(error) { return; }
    if( this.props.upload === "restaurant") {
      ApiUtil.updateRestaurant({id: this.props.id, restaurant:{image_url: result[0].url}});
    } else if( this.props.upload === "user"){
      ApiUtil.updateUser({image_url: result[0].thumbnail_url});
    }
  },
  render: function() {
    return(
      <div className="group upload-widget" onClick={this.imageUploader}>
        <div className="glyphicon glyphicon-camera "/>
        <p> Add Photo </p>
      </div>
    );
  }
});
