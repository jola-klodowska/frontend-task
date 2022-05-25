import React from 'react';
import Colors from './components/Colors/Colors';
import Filter from './components/Filter/Filter';
import FormAdd from './components/FormAdd/FormAdd';


export interface MyColor {
  name: string;
  red: number;
  green: number;
  blue: number;
  isDefault: boolean;
}

const App = () => {

  const defaultColors: MyColor[] = [
    {
      name: '#FF0000',
      red: 255,
      green: 0,
      blue: 0,
      isDefault: true
    },
    {
      name: '#00FF00',
      red: 0,
      green: 255,
      blue: 0,
      isDefault: true
    },
    {
      name: '#0000FF',
      red: 0,
      green: 0,
      blue: 255,
      isDefault: true
    }
  ];
  // TODO napraw to
  let customColors = (() => {
    let savedColors = window.localStorage.getItem('myColors');

    let result: MyColor[] = [];
    if (savedColors != null) {
      result = JSON.parse(savedColors);
    }
    return result;
  })();

  let allColors = [...defaultColors, ...customColors]

  const addNewCustomColor = (color: MyColor) => {
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

  return (
    <main>
      <FormAdd onColorAdd={addNewCustomColor} />
      <Filter />
      <Colors colors={allColors} onColorRemove={removeColor} />
    </main>
  );
};

export default App;
