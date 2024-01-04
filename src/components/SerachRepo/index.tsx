import React, {useState} from "react";
import {TextField, Box, Autocomplete, CircularProgress} from "@mui/material";
import {SEARCH_WIDTH} from "./constants";
import {useSearchRepo} from "src/graphql/requests/useSearchRepo";
import useDebounce from "src/helpers/useDebounce";
import {TRepoNode, TSingleEdge} from "./types";

const SearchRepo: React.FC = () => {
  const [repoName, setRepoName] = useState("");
  const search = useDebounce(repoName, 500);
  const {data, loading} = useSearchRepo(search);
  const options = data?.search?.edges?.filter(
    (edge): edge is Omit<TSingleEdge, "node"> & {node: TRepoNode} =>
      "name" in (edge?.node || {})
  );

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Autocomplete
        sx={{
          flexGrow: 1,
          maxWidth: SEARCH_WIDTH,
        }}
        options={options || []}
        getOptionLabel={(option) => option?.node.name}
        isOptionEqualToValue={(option, value) =>
          option?.node.name === value?.node.name
        }
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search repo"
            onChange={(e) => setRepoName(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
};

export default SearchRepo;
