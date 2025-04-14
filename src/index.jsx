import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore, bindActionCreators } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import App from './components/app'


import counterSlice from './reducer'; // Импорт слайса

// Достаём экшены
// const { increment, decrement, random } = counterSlice.actions;

// Создаём store
const store = configureStore({
    reducer: counterSlice.reducer  // Состояние просто число
});

// const { dispatch } = store;

// Привязываем экшены
// const actions = bindActionCreators(
//     { increment, decrement, random },
//     dispatch
// );


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

