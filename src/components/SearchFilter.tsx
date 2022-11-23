import Modal from './Modal';

import styled from '@emotion/styled';

type SearchFilterProp = {
  isFilterHandler: () => void;
};

const SearchFilter = ({ isFilterHandler }: SearchFilterProp) => {
  return (
    <>
      <Modal className="SearchFilter" visible={true}>
        <Option></Option>
        <Button onClick={isFilterHandler}>필터 종료</Button>
      </Modal>
    </>
  );
};

export default SearchFilter;

const Option = styled.div`
  width: 100%;
  height: 30vh;
`;

const Button = styled.button`
  width: 100%;
  height: 3.5vh;
  background-color: #ffa500;
  border-radius: 0.3rem;
  border: none;
`;
