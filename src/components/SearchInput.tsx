import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSearchKeyword } from 'store/product/productSlice';
import { AppDispatch } from 'store/configureStore';
import SearchFilter from './SearchFilter';

import styled from '@emotion/styled';

type ChangeEvent = React.ChangeEvent<HTMLFormElement>;

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchValue = (event: ChangeEvent) => {
    event.preventDefault();

    dispatch(setSearchKeyword(keyword));
    setKeyword('');
  };

  const filterButtonHandler = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <SearchInputContainer>
        <Form onSubmit={handleSearchValue}>
          <Input
            type="text"
            placeholder="검색어를 입력해주세요."
            value={keyword}
            onChange={event => setKeyword(event.target.value)}
          />
        </Form>
        <Button onClick={filterButtonHandler}>필터</Button>
      </SearchInputContainer>
      {showFilter && <SearchFilter isFilterHandler={filterButtonHandler} />}
    </>
  );
};

export default SearchInput;

const SearchInputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
`;

const Form = styled.form``;

const Input = styled.input`
  height: 3.5vh;
  padding-left: 0.5rem;
  border: 1px solid #c4c4c4;
  border-radius: 0.3rem;
`;

const Button = styled.button`
  width: 12%;
  height: 3.5vh;
  margin-left: 0.5rem;
  background-color: #ffa500;
  border-radius: 0.3rem;
  border: none;
`;
