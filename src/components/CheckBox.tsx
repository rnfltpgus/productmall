import styled from '@emotion/styled';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  clickHandler: (event: ChangeEvent) => void;
}

const CheckBox = ({ label, isChecked, clickHandler }: CheckBoxProps) => {
  return (
    <Label>
      <Input type="checkbox" checked={isChecked} onChange={clickHandler} />
      {label}
    </Label>
  );
};

export default CheckBox;

const Label = styled.label`
  margin-right: 1.7rem;
`;

const Input = styled.input`
  margin-right: 0.5rem;
`;
