var CloudinaryUploader = React.createClass({
  imageUploader: function(e) {
    e.preventDefault();

    cloudinary.openUploadWidget({upload_preset: window.CLOUDINARY_OPTIONS.upload_preset},
      this.uploadImage) ;
  },
  uploadImage: function(error, result) {
    if( this.props.upload === "restaurant") {
      ApiUtil.updateRestaurant({id: this.props.id, restaurant:{image_url: result[0].thumbnail_url}});
    } else if( this.props.upload === "user"){
      ApiUtil.updateUser({image_url: result[0].thumbnail_url});
    }
  },
  render: function() {
    return(
      <div className="upload-widget">
        <button className="btn" onClick={this.imageUploader}>Upload Image!</button>
      </div>
    );
  }
});
