const Greetings = ({
  name,
  timeOfDay,
}: {
  name: string;
  timeOfDay: string;
}) => {
  return (
    <div>
      <h2>
        Good {timeOfDay}, {name}!
      </h2>
    </div>
  );
};

export default Greetings;
