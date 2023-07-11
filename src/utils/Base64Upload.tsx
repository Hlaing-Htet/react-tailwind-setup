export const base64FileUploadHandler = async (
  e: any,
  setFile: React.Dispatch<React.SetStateAction<any>>
) => {
  const file = e.target.files[0];

  if (file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      setFile(e.target.result);
      // console.log(e.target.result);
    };
  }
};
export const deleteBase64FileHandler = async (
  setFile: React.Dispatch<React.SetStateAction<any>>,
  setFile2: React.Dispatch<React.SetStateAction<any>>
) => {
  setFile(undefined);
  setFile2(undefined);
};

export const mutipleBase64FilesUploadHandler = async (
  e: any,
  setFiles: React.Dispatch<React.SetStateAction<any>>
) => {
  let photo = e.target.files;
  let photos = [...photo];
  // @ts-expect-error
  photos?.map((el, index) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      setFiles((oldFiles: any) => [...oldFiles, e.target.result]);
    };
    reader.readAsDataURL(photos[index]);
  });
};
