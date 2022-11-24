import { useSelector } from 'react-redux';

import { productListById } from 'store/configureStore';
import Modal from './Modal';
import FilterGroup from './FilterGroup';

import styled from '@emotion/styled';

type SearchFilterProp = {
  isFilterHandler: () => void;
};

const SearchFilter = ({ isFilterHandler }: SearchFilterProp) => {
  const productInfo = useSelector(productListById);
  const productInfoArray = Object.values(productInfo);
  const productCategory = productInfoArray.map(value => value.club);
  const filteredProductPlaceList = new Set<string>([]);
  const filteredProductTypeList = new Set<string>([]);

  productCategory.forEach(item => {
    filteredProductPlaceList.add(item.place);
    filteredProductTypeList.add(item.type);
  });

  return (
    <>
      <Modal className="SearchFilter" visible={true}>
        <FilterGroup type="장소" label={filteredProductPlaceList} />
        <FilterGroup type="유형" label={filteredProductTypeList} />
        <Button onClick={isFilterHandler}>필터 종료</Button>
      </Modal>
    </>
  );
};

export default SearchFilter;

const Button = styled.button`
  width: 100%;
  height: 3.5vh;
  background-color: #ffa500;
  border-radius: 0.3rem;
  border: none;
`;
