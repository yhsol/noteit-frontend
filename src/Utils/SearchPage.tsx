import React from "react";
import useInput from "./Hooks/useInput";
import { withRouter, RouteComponentProps } from "react-router";
// import Input from "./Input";
import styled from "styled-components";
import { SearchIcon } from "./Icons";

const Form = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 0px 0.5rem;
  width: 80%;
  margin: 2rem auto;
  height: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SInput = styled.input`
  border: none;
  font-size: 20px;
  background-color: inherit;
  width: 100%;
`;

const SButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

// TODO: search 컴포넌트에서 input 부분은 작은 화면에서만 보여줘야 됨.

type ISearchProps = RouteComponentProps;

const SearchPage: React.FunctionComponent<ISearchProps> = props => {
  const search = useInput("");
  // const onSearchSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   props.history.push(`/search?term=${search.value}`);
  // };
  return (
    <div>
      <Form>
        <SInput
          value={search.value}
          onChange={search.onChange}
          placeholder={"search"}
          required={true}
          type={"text"}
          className={"className"}
        />
        <SButton>
          <SearchIcon size={17} />
        </SButton>
      </Form>
    </div>
  );
};

export default withRouter(SearchPage);
