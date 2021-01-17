import './styles/styles.css';
import * as React from 'react';
import Title from './components/Title.js';
import SignUpForm from './components/Signupform.js';
import Footer from './components/Footer.js';
import ContextProvider from './context/context.js'

const App = () => {
    return (
        <>
            <ContextProvider>
                <div className="App">
                    <Title />
                    <div className="Hero">
                        <SignUpForm />
                    </div>
                    <Footer />
                </div>
            </ContextProvider>
        </>
    );
}

export default App;
