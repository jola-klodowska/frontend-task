import React from 'react';
import Colors from './components/Colors/Colors';
import Filter from './components/Filter/Filter';
import FormAdd from './components/FormAdd/FormAdd';


export interface MyColor {
  name: string;
  id: string;
}

const App = () => {

  const defaultColors: MyColor[] = [
    {
      id: '1',
      name: '#FF0000'
    },
    {
      id: '2',
      name: '#00FF00'
    },
    {
      id: '3',
      name: '#0000FF'
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

  const removeColor = (colorId: string) => {
    customColors = customColors.filter(x => x.id !== colorId);
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
