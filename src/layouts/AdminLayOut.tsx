import { ImageUpload } from "@/components/share";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const AdminLayOut = () => {
  const [image, setImage] = useState();
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="w-1/3 ">
        <ImageUpload image={image} setImage={setImage} aspect="aspect-video" />
        <Button>hi</Button>
      </div>
    </div>
  );
};

export default AdminLayOut;
