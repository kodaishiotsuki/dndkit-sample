import { UniqueIdentifier } from "@dnd-kit/core";

const Item = ({ id }: { id: UniqueIdentifier }) => {
  return (
    <div className="w-full h-[50px] flex items-center justify-center my-2.5 border border-black rounded-lg">
      {id}
    </div>
  );
};
export default Item;
