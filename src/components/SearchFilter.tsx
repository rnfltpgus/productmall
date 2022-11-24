import { useSelector } from 'react-redux';

import { RootState } from 'store/configureStore';
import Modal from './Modal';
import FilterGroup from './FilterGroup';

import styled from '@emotion/styled';

type SearchFilterProp = {
  isFilterHandler: () => void;
};

const SearchFilter = ({ isFilterHandler }: SearchFilterProp) => {
  const productInfo = useSelector((state: RootState) => state.product.byId);
  const productInfoArray = Object.values(productInfo);
  const productType = productInfoArray.map(value => value.club.type);
  const filteredProductTypeList = new Set<string>([]);

  productType.forEach(item => {
    filteredProductTypeList.add(item);
  });

  return (
    <>
      <Modal className="SearchFilter" visible={true}>
        <FilterGroup type="장소" label={filteredProductTypeList} />
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
