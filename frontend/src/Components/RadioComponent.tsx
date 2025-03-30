import { RadioComponentProps } from "../types/radioComponent"

const RadioComponent: React.FC<RadioComponentProps> = ({text, data, changeSelection}) => {

  const handleChange = (val: string) => {
    if (changeSelection){
      changeSelection(val);
    }
  }

  return (
    <div className={`border p-4 cursor-pointer ${data === text ? 'bg-red-200': 'bg-white'}`} onClick={() => handleChange(text)}>
        <span className="font-semibold"> 
            {text}
        </span>
    </div>
  )
}

export default RadioComponent