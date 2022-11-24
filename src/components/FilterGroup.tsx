import { useState } from 'react';

import CheckBox from './CheckBox';

import styled from '@emotion/styled';

interface FilterGroupProps {
  type: string;
  label: Set<string>;
}

const FilterGroup = ({ type, label }: FilterGroupProps) => {
  const [clickedItemList, setIsClickedItemList] = useState<string[]>([]);

  const clickLabelHandler = (value: string) => {
    if (clickedItemList.includes(value)) {
      const filterResult = clickedItemList.filter(item => item !== value);

      setIsClickedItemList(filterResult);
    } else {
      setIsClickedItemList([...clickedItemList, value]);
    }
  };

  return (
    <FilterGroupContainer>
      <legend>{type}</legend>
      {[...label].map(data => {
        return (
          <CheckBox
            key={data}
            isChecked={clickedItemList.includes(data)}
            clickHandler={() => clickLabelHandler(data)}
            label={data}
          />
        );
      })}
    </FilterGroupContainer>
  );
};

export default FilterGroup;

const FilterGroupContainer = styled.form`
  width: 100%;
  height: 30vh;
`;
