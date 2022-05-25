import React from 'react';
import Colors from './components/Colors/Colors';
import Filter from './components/Filter/Filter';
import FormAdd from './components/FormAdd/FormAdd';
import ColorInformation from './types/color-information';
import { SearchFilter } from './types/search-filter';


const App = () => {

  const defaultColors: ColorInformation[] = [
    {
      name: '#FF0000',
      components: [255,0,0],
      isDefault: true
    },
    {
      name: '#00FF00',
      components: [0,255,0],
      isDefault: true
    },
    {
      name: '#0000FF',
      components: [0,0,255],
      isDefault: true
    }
  ];

  let customColors = (() => {
    let savedColors = window.localStorage.getItem('myColors');

    let result: ColorInformation[] = [];
    if (savedColors != null) {
      result = JSON.parse(savedColors);
    }
    return result;
  })();

  let allColors = [...defaultColors, ...customColors];

  const addNewCustomColor = (color: ColorInformation) => {
    const isAlreadyInList = customColors.map(x => x.name).some(x => x === color.name);

    if (isAlreadyInList) {
      alert("Color already on the list");
      return;
    }

    customColors.push(color);
    saveCustomColorList();
  }

  const removeColor = (colorName: string) => {
    customColors = customColors.filter(x => x.name !== colorName);
    saveCustomColorList();
  }

  const saveCustomColorList = () => {
    window.localStorage.setItem('myColors', JSON.stringify(customColors));
  }

  let allFilters: SearchFilter[] = [];

  const addFilter = (newFilter: SearchFilter) => {
    console.log(newFilter)
    allFilters.push(newFilter);
  }

  return (
    <>
      <FormAdd onColorAdd={addNewCustomColor} />
      <Filter onFilterAdd={addFilter} />
      <Colors colors={allColors} filters={allFilters} onColorRemove={removeColor} />
    </>
  );
};

export default App;
