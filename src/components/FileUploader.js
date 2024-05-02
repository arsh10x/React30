//** FILE UPLOADER ALLOWS TO UPLOAD IMAGES
import React from "react";

const FileUploader = () => {
    const [file, setFile] = React.useState(null);
    
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };
    //  FIXME: Implement localstorage to store the file.

  const Styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    img: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      margin: "10px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgray",
      textAlign: "center",
    },
  };
  return (
    <div style={Styles.container}>
      <h2>File Uploader</h2>
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="uploaded file"
          style={Styles.img}
        />
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
