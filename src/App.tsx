import Heading from "./components/ui/Heading";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Heading className=" text-primary" size="large3">
        Primary
      </Heading>
      <Heading className=" text-secondary" size="large3">
        Secondary
      </Heading>
    </div>
  );
};

export default App;
