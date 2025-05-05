import Greetings from "./Greetings";

const ParentGreeting = () => {
  return (
    <div>
      <Greetings name="Jhon" timeOfDay="Morning" />
      <Greetings name="Sarah" timeOfDay="Afternoon" />
      <Greetings name="Alex" timeOfDay="Evening" />
    </div>
  );
};

export default ParentGreeting;
