import 'babel-polyfill';
import { render }  from 'react-dom';
import Routes from './routes.jsx';

render(Routes, document.getElementById('app'));