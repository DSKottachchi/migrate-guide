/* eslint-disable @typescript-eslint/no-unused-vars */
import Tile from "../../components/ui/tile/Tile";

const tiles = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

const Group = () => {
  return (
    <div className="flex gap-10">
      {tiles.map(() => (
        <Tile />
      ))}
    </div>
  );
};

export default Group;
