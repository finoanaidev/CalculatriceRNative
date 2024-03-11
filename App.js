
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  const handleInput = (input) => {
    if (input === '+' || input === '-' || input === '*' || input === '/') {
      if (firstValue === '') {
        setFirstValue(displayValue);
      } else {
        calculateResult();
      }
      setOperator(input);
      setDisplayValue(input);
    } else if (input === '=') {
      if (operator !== null && firstValue !== '') {
        setSecondValue(displayValue);
        calculateResult();
        setOperator(null);
      }
    } else if (input === 'C') {
      clearDisplay();
    } else {
      if (displayValue === '0' || operator !== null) {
        setDisplayValue(input);
      } else {
        setDisplayValue(displayValue + input);
      }
    }
  };

  const calculateResult = () => {
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(firstValue) + parseFloat(displayValue);
        break;
      case '-':
        result = parseFloat(firstValue) - parseFloat(displayValue);
        break;
      case '*':
        result = parseFloat(firstValue) * parseFloat(displayValue);
        break;
      case '/':
        result = parseFloat(firstValue) / parseFloat(displayValue);
        break;
      default:
        return;
    }
    setDisplayValue(result.toString());
    setFirstValue(result.toString());
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setSecondValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => handleInput('C')} style={styles.button}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('/')} style={styles.button}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('*')} style={styles.button}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('-')} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('7')} style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('8')} style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('9')} style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('+')} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('4')} style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('5')} style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('6')} style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('=')} style={styles.button}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('1')} style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('2')} style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('3')} style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInput('0')} style={styles.button}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#f0f0f0',
    width: '100%',
  },
  displayText: {
    fontSize: 40,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#999999',
  },
  buttonText: {
    fontSize: 20,
  },
});
