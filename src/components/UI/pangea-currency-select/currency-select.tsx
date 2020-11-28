import React from 'react';

const CurrencySelect = (props: any) => {
    const { loading, error, currencyData, onCurrencySelected } = props;
    
    return (
      <select name="currency" onChange={onCurrencySelected} style={{ border: 0, padding: 4 }}>
        {currencyData?.currency.map((val: any) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    );
  }

  export default CurrencySelect;