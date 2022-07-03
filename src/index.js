import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './components/banner/banner.js';
import List from './components/list/list.js';
import styles from './index.module.css';

class App extends React.Component
{
    render() {
        return (
            <div>
                <Banner/>
                <List/>
            </div>
        )
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);