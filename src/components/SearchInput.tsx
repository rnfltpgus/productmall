import { useRef, useState } from 'react';

import SearchFilter from './SearchFilter';

import styled from '@emotion/styled';

type KeyboardEvent = React.KeyboardEvent<HTMLInputElement>;

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState('');
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const onSearchKeyword = (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      const enteredKeyword = inputRef.current?.value;
      const trimmedKeyword = enteredKeyword ? enteredKeyword.trim() : '';

      setKeyword(trimmedKeyword);
    }
  };

  const filterButtonHandler = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <SearchInputContainer>
        <Input
          type="text"
          ref={inputRef}
          defaultValue={keyword}
          placeholder="검색어를 입력해주세요"
          onKeyUp={onSearchKeyword}
        />
        <Button onClick={filterButtonHandler}>필터</Button>
        {showFilter && <SearchFilter isFilterHandler={filterButtonHandler} />}
      </SearchInputContainer>
    </>
  );
};

export default SearchInput;

const SearchInputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 70%;
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
