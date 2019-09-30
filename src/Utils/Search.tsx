import React from "react";
import useInput from "./Hooks/useInput";
import { withRouter, RouteComponentProps } from "react-router";
import Input from "./Input";

// TODO: search 컴포넌트에서 input 부분은 작은 화면에서만 보여줘야 됨.

type ISearchProps = RouteComponentProps;

const Search: React.FunctionComponent<ISearchProps> = props => {
  const search = useInput("");
  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.history.push(`/search?term=${search.value}`);
  };
  return (
    <div>
      <form onSubmit={onSearchSubmit}>
        <Input
          value={search.value}
          onChange={search.onChange}
          placeholder="search.."
          icon={true}
        />
      </form>
    </div>
  );
};

export default withRouter(Search);
