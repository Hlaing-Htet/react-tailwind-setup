import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
// import Image from "@/assets/egProfileImg.jpeg";
import Paragraph from "@/components/ui/Paragraph";
import getCroppedImg from "./cropImage";
import { Button } from "@/components/ui/Button";

export const ImageCrop = ({
  Image,
  setCoverImage,
  width,
  height,
}: {
  Image: any;
  setCoverImage: React.Dispatch<React.SetStateAction<any>>;
  width: number;
  height: number;
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  // @ts-expect-error
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  // @ts-expect-error
  const [croppedImage, setCroppedImage] = useState<any>(null);
  const [croppedArea, setCroppedArea] = useState(null);

  // @ts-expect-error
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        Image,
        croppedAreaPixels,
        rotation
      );

      setCoverImage(croppedImage);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  // const onClose = useCallback(() => {
  //   setCroppedImage(null);
  // }, []);

  return (
    <div className="z-50 w-full h-fit">
      <div className="relative w-full bg-black h-60">
        <Cropper
          image={Image}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={width / height}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
          onCropAreaChange={(croppedArea) => {
            // @ts-expect-error
            setCroppedArea(croppedArea);
          }}
        />
      </div>
      <div>
        <div className="flex items-center justify-between my-4">
          <div className="">
            <Paragraph size="small2">Zoom</Paragraph>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => setZoom(Number(e.target.value))}
            />
          </div>
          {/* <div>
            <Paragraph size="small2">Rotation</Paragraph>
            <input
              type="range"
              value={rotation}
              min={0}
              max={360}
              step={1}
              aria-labelledby="Rotation"
              onChange={(e) => setRotation(Number(e.target.value))}
            />
          </div> */}
          <Button size="small1" type="button" onClick={showCroppedImage}>
            done
          </Button>
        </div>
        <div>
          {/* <img
            src={croppedImage ? URL.createObjectURL(croppedImage) : ""}
            alt=""
          /> */}
          <div>
            {croppedArea && (
              <Output
                croppedArea={croppedArea}
                Image={Image}
                width={width}
                height={height}
                rotation={rotation}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const Output = ({
  croppedArea,
  Image,
  width,
  height,
  rotation,
}: {
  croppedArea: any;
  Image: string;
  width: number;
  height: number;
  rotation: number;
}) => {
  const scale = 100 / croppedArea.width;
  const transform = {
    x: `${-croppedArea.x * scale}%`,
    y: `${-croppedArea.y * scale}%`,
    scale,
    rotation,
    width: "calc(100% + 0.5px)",
    height: "auto",
  };

  const imageStyle = {
    transform: `translate3d(${transform.x}, ${transform.y}, 0) scale3d(${transform.scale},${transform.scale},1)  rotate(${transform.rotation}deg)`,

    width: transform.width,
    height: transform.height,
  };

  return (
    <div
      className={`relative w-full overflow-hidden `}
      style={{ paddingBottom: `${100 / (width / height)}%` }}
    >
      <img
        className="absolute top-0 left-0 object-contain origin-top-left"
        src={Image}
        alt=""
        style={imageStyle}
      />
    </div>
  );
};
