import React from "react";

export const FileUploadHandler: React.FC<{
  setFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ setFile }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const result = e?.target?.result as string | undefined;
        if (result) {
          setFile(result);
        }
      };
    }
  };

  return <input type="file" className="hidden" onChange={handleFileChange} />;
};

export const DeleteFileHandler: React.FC<{
  setFile: React.Dispatch<React.SetStateAction<string | undefined>>;
}> = ({ setFile }) => {
  const handleFileDelete = () => {
    setFile(undefined);
  };

  return <button onClick={handleFileDelete}>Delete File</button>;
};

export const MultipleFilesUploadHandler: React.FC<{
  setFiles: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ setFiles }) => {
  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const photoFiles = Array.from(fileInput.files);
      photoFiles.forEach((photoFile) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e?.target?.result as string | undefined;
          if (result) {
            setFiles((oldFiles) => [...oldFiles, result]);
          }
        };
        reader.readAsDataURL(photoFile);
      });
    }
  };

  return <input type="file" multiple onChange={handleFilesChange} />;
};
