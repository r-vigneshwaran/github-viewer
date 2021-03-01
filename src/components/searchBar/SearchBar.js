import React,{useState,useEffect} from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {TextField} from "@material-ui/core";
import useStyles from './styles';

const SearchBar = ({HandleSearch,currentPage,setQuery}) => {
  const classes=useStyles();
  const [value,setValue] =useState();

  const HandleChange=(query)=>{
    setQuery(query); 
    setValue(query)
  }
 
    return (
        <div>
        <TextField
        label="Search for Images"
        id="filled-multiline-flexible"
          multiline
          variant="outlined"
          value={value}
        onChange={(e)=>HandleChange(e.target.value)}
        className={classes.searchBar}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={(e)=>HandleChange(value)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
        </div>
    )
};



export default SearchBar;
