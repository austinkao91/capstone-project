var CloudinaryUploader = React.createClass({
  uploadImage: function(e) {
    e.preventDefault();

    cloudinary.openUploadWidget({upload_preset: window.CLOUDINARY_OPTIONS.upload_preset},
      function(error, result) {console.log(error, result);});
  },
  render: function() {
    return(
      <div className="upload-widget">
        <button className="btn" onClick={this.uploadImage}>Upload Image!</button>
      </div>
    );
  }
});
