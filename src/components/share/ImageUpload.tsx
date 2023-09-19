import { deleteFileHandler, uploadFileHandler } from "@/utils";
import { BsImage } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";

const ImageUpload = ({
  image,
  setImage,
  aspect = "aspect-video",
}: {
  image: any;
  setImage: React.Dispatch<React.SetStateAction<undefined>>;
  aspect?: string;
}) => {
  return (
    <div className={`w-full bg-white ${aspect}`}>
      {image && (
        <div className="relative h-full">
          <img
            src={image?.size ? URL.createObjectURL(image) : `${image}`}
            alt=""
            className={`object-contain w-full ${aspect}`}
          />
          <button
            type="button"
            className="absolute p-2 rounded-full bg-grey1 text-red right-2 top-2"
            onClick={() => deleteFileHandler(setImage)}
          >
            <RiDeleteBin5Line className="w-5 h-5" />
          </button>
        </div>
      )}
      {!image && (
        <label className="flex items-center justify-center h-full gap-4 border-2 border-dashed cursor-pointer">
          <BsImage />
          <div>
            <p>
              <span className="text-dreamLabColor1">Upload a file</span> or
            </p>
            <p> drag and drop</p>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => uploadFileHandler(e, setImage)}
            className="hidden"
          />
        </label>
      )}
      {/* {check && (
          <p className="pt-2 text-red-500">
            {!icon && "Image file required"}
          </p>
        )} */}
    </div>
  );
};

export default ImageUpload;
