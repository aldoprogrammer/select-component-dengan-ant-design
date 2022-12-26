import React from 'react';
import './App.css';
import { Select } from 'antd';

function App () {
  const cars = ['Lamborghini', 'Sigra R', 'Ayla', 'Buggati']
  const foods = ['Siomay', 'Nasi Padang', 'Bakso', 'Sate']
  const countries = ['United States', 'England', 'Indonesia', 'Italy']

  return (
    <div className="App">
      <header className="App-header">
      <p>Which is your fav car, only one car?</p>
      <Select placeholder='Select Car' style={{width:'50%'}}>
        {cars.map((car,index)=>{
          return <Select.Option key={index} value={car}>{car}</Select.Option>
        })}
      </Select>
      <br />
      <p>Which is your fav foods, max 2?</p>
      <Select mode='multiple' maxTagCount={2} placeholder='Select Food' style={{width:'50%'}}>
        {foods.map((food,index)=>{
          return <Select.Option key={index} value={food}>{food}</Select.Option>
        })}
      </Select>
      <br />
      <p>Which is your fav country, clear allowes?</p>
      <Select mode='multiple' allowClear placeholder='Select Country' style={{width:'50%'}}>
        {countries.map((country,index)=>{
          return <Select.Option key={index} value={country}>{country}</Select.Option>
        })}
      </Select>
      <br />
      <br />
      <h2>This Site Is Created by Aldo LS</h2>
      </header>
    </div>
  );

}
export default App;