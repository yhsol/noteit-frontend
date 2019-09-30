import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQuery";
import SearchPresenter from "./SearchPresenter";

type ISearchContainerProps = RouteComponentProps;

const SearchContainer: React.FunctionComponent<
  ISearchContainerProps
> = props => {
  const {
    location: { search }
  } = props;
  const term = search.split("=")[1];
  const { loading, data } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term
    }
  });
  console.log(loading, data, term);
  return <SearchPresenter loading={loading} data={data} searchTerm={term} />;
};

export default withRouter(SearchContainer);
