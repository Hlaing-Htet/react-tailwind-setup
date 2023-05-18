import { MdFace } from "react-icons/md";
import { Button } from "./components/ui/Button";
import ModalBox from "./components/ui/ModalBox";
import RightSideBox from "./components/ui/RightSideBox";
import Heading from "./components/ui/Heading";
import Paragraph from "./components/ui/Paragraph";

const App = () => {
  return (
    <div className="">
      <Heading size={"large3"}>Title</Heading>
      <Heading align={"center"} size={"large2"}>
        Title
      </Heading>
      <Heading align={"end"} size={"large1"}>
        Title
      </Heading>
      <Heading align={"center"}>Title</Heading>
      <Heading size={"small1"}>Title</Heading>
      <Heading size={"small2"}>Title</Heading>
      <Heading size={"small3"}>Title</Heading>

      <ModalBox btn={<Button>Button</Button>}>
        <div className="flex flex-col gap-5">
          {" "}
          <Button size={"small"}>Small</Button>
          <Button size={"small1"}>Small1</Button>
          <Button size={"small2"}>Small2</Button>
          <Button size={"small3"}>Small3</Button>
          <Button className="">Defult</Button>
          <Button size={"medium"}>Medium</Button>
          <Button size={"medium1"}>Medium1</Button>
          <Button size={"medium2"}>Medium2</Button>
          <Button size={"medium3"}>Medium3</Button>
          <Button size={"medium4"}>Medium4</Button>
          <Button size={"large"}>Large</Button>
          <Button size={"large1"}>Large1</Button>
          <Button size={"large2"}>Large2</Button>
          <Button size={"large3"}>Large3</Button>
          <Button size={"large4"}>Large4</Button>
          <Button size={"full"}>Width Full</Button>
          <Button isLoading={true}>Button</Button>
          <Button size={"squle"}>
            <MdFace />
          </Button>
          <Button size={"squle1"}>
            <MdFace />
          </Button>
          <Button size={"squle2"}>
            <MdFace />
          </Button>
          <hr />
          <Button variant={"outline"} rounded={"full"}>
            Outline
          </Button>
          <Button variant={"secondaryOutline"} rounded={"full"}>
            Outline
          </Button>
          <Button disabled={true} variant={"secondary"}>
            secondary
          </Button>
          <Button variant={"link"} size={"small"}>
            Link
          </Button>
        </div>
      </ModalBox>
      <RightSideBox btn={<Button>Side Box</Button>}>
        <h1>hi</h1>
      </RightSideBox>

      <Button onClick={() => alert("hi")}>Button</Button>
      <Button variant={"link"} rounded={"full"}>
        link
      </Button>
      <Paragraph size={"large"} className=" xl:w-1/2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        optio perferendis blanditiis architecto itaque et alias cumque totam.
        Ipsum nisi eaque recusandae dicta. Dignissimos neque qui soluta
        repudiandae expedita! Veniam.
      </Paragraph>
      <Paragraph className=" xl:w-1/2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        optio perferendis blanditiis architecto itaque et alias cumque totam.
        Ipsum nisi eaque recusandae dicta. Dignissimos neque qui soluta
        repudiandae expedita! Veniam.
      </Paragraph>
      <Paragraph size={"small"} className=" xl:w-1/2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
        optio perferendis blanditiis architecto itaque et alias cumque totam.
        Ipsum nisi eaque recusandae dicta. Dignissimos neque qui soluta
        repudiandae expedita! Veniam.
      </Paragraph>
    </div>
  );
};

export default App;
