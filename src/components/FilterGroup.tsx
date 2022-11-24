import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'store/configureStore';
import { addFilter, removeFilter } from 'store/product/productSlice';
import CheckBox from './CheckBox';

import styled from '@emotion/styled';

interface FilterGroupProps {
  type: string;
  label: Set<string>;
}

const FilterGroup = ({ type, label }: FilterGroupProps) => {
  const filterListInfo = useSelector((state: RootState) => state.product.filterList);
  const dispatch = useDispatch<AppDispatch>();

  const clickLabelHandler = (value: string) => {
    if (filterListInfo.includes(value)) {
      dispatch(removeFilter(value));
    } else {
      dispatch(addFilter(value));
    }
  };

  return (
    <FilterGroupContainer>
      <legend>{type}</legend>
      {[...label].map(data => {
        return (
          <CheckBox
            key={data}
            isChecked={filterListInfo.includes(data)}
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
