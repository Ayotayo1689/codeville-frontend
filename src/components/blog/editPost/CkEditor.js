import React, { useState } from "react";
import { CKEditor } from "ckeditor4-react";

function CkEditor({ handleEditorChange, editorData }) {
	console.log(editorData);
	return (
		<div>
			<CKEditor
				id="editorData"
				initData={`${editorData}`}
				onChange={handleEditorChange}
				config={{
					extraPlugins: "easyimage",
					removePlugins: "image",
					height: "700px",
					cloudServices_uploadUrl: "https://33333.cke-cs.com/easyimage/upload/",
					cloudServices_tokenUrl:
						"https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt",
				}}
			/>
		</div>
	);
}

export default CkEditor;
