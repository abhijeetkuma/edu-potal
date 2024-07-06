import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "ckeditor5/ckeditor5.css";

import { config } from "./editorConfig";

export default function CKTextEditor() {
  //   const [body, setBody] = useState("");
  ClassicEditor.defaultConfig = config;

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onSubmit({ body });
  //   };

  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Start Typing ...</p>"
        onReady={(editor) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          //   setBody(data);
        }}
        onBlur={(event, editor) => {
          console.log("Blur", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus", editor);
        }}
      />
    </>
  );
}

// export default CKTextEditor;
