import COLORS from "../constants/Colors";
// import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';

const Searchbar = () => {
  const [search, setSearch] = useState('');

  return (
    <SearchBar
      placeholder="Search for a car"
      style = {{fontFamily: 'PoppinsRegular', fontSize: 14, color: COLORS.black, backgroundColor: 'white'}}
      onChangeText={setSearch}
      value={search}
    />
  );
};

export default Searchbar;