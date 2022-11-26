import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resetFilter, setSearchKeyword } from 'store/product/productSlice';
import { AppDispatch, productFilterList, productSearchKeyword } from 'store/configureStore';
import SearchFilter from './SearchFilter';

import styled from '@emotion/styled';

type ChangeEvent = React.ChangeEvent<HTMLFormElement>;

const SearchInput = () => {
  const [keyword, setKeyword] = useState('');
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const filterListInfo = useSelector(productFilterList);
  const searchKeywordInfo = useSelector(productSearchKeyword);
  const navigate = useNavigate();

  const handleSearchValue = (event: ChangeEvent) => {
    event.preventDefault();

    dispatch(setSearchKeyword(keyword));

    if (!keyword) {
      navigate({
        pathname: '/',
      });
    } else {
      if (!filterListInfo.length) {
        navigate({
          pathname: '/',
          search: `search?q=${keyword}`,
        });
      } else {
        navigate({
          pathname: '/',
          search: `search?q=${searchKeywordInfo}?filter=${filterListInfo}`,
        });
      }
    }

    setKeyword('');
  };

  const filterButtonHandler = () => {
    if (!filterListInfo.length) {
      navigate({
        search: `search?q=${searchKeywordInfo}`,
      });
    } else {
      navigate({
        pathname: '/',
        search: `search?q=${searchKeywordInfo}?filter=${filterListInfo}`,
      });
    }

    setShowFilter(!showFilter);
  };

  const resetFilterButtonHandler = () => {
    dispatch(resetFilter());
    navigate('/');
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
        <Button onClick={resetFilterButtonHandler}>리셋필터</Button>
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
