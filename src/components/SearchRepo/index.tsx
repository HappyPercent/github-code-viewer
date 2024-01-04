import React, {useState} from "react";
import {
  TextField,
  Box,
  Autocomplete,
  CircularProgress,
  Typography,
} from "@mui/material";
import {SEARCH_WIDTH} from "./constants";
import {useSearchRepo} from "src/graphql/requests/useSearchRepo";
import useDebounce from "src/helpers/useDebounce";
import {TRepoNode, TSingleEdge} from "./types";

const SearchRepo = ({onSelect}: {onSelect: (node: TRepoNode) => void}) => {
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
        onChange={(_, value) => onSelect(value?.node!)}
        loading={loading}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{"& > img": {mr: 2, flexShrink: 0}}}
            {...props}
          >
            {option?.node.name}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginLeft: "auto",
                marginRight: 2,
              }}
            >
              {option?.node.owner.login}
            </Typography>
            <img
              loading="lazy"
              width="20"
              src={option?.node.owner.avatarUrl}
              alt=""
            />
          </Box>
        )}
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
