import React from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => console.log(files),
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <>
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    </>
  );
};

export default Dropzone;