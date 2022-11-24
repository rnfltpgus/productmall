type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  clickHandler: (event: ChangeEvent) => void;
}

const CheckBox = ({ label, isChecked, clickHandler }: CheckBoxProps) => {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={clickHandler} />
      {label}
    </label>
  );
};

export default CheckBox;
