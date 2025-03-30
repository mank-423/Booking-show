import { RadioComponentProps } from "../types/radioComponent";

const SeatInput: React.FC<RadioComponentProps> = ({ text }) => {
    return (
      <div className="flex border py-4 px-1 gap-5 cursor-pointer items-center">
        {/* Ensure both spans take equal width */}
        <span className="font-semibold flex-1 text-center">
          {text}
        </span>
  
        <span className="bg-white border rounded-lg flex-1 flex justify-center">
          <input
            type="number"
            className="w-full text-center outline-none"
            defaultValue={0}
            placeholder="0"
            max={30}
            min={0}
          />
        </span>
      </div>
    );
  };
  
  export default SeatInput;
  