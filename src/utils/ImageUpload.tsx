export const uploadFileHandler = async (
  e: any,
  setIcon: React.Dispatch<React.SetStateAction<any>>
) => {
  const file = e.target.files[0];
  setIcon(file);
};

export const deleteMainImageHandler = async (
  setIcon: React.Dispatch<React.SetStateAction<any>>
) => {
  setIcon(null);
};
export const mutipleFilesUploadHandler = async (
  e: any,
  setFiles: React.Dispatch<React.SetStateAction<any>>
) => {
  let photo = e.target.files;
  let photos = [...photo];
  setFiles((oldFiles: any) => [...oldFiles, ...photos]);
};
