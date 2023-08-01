import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaesarCipher from './CaesarCipher';
import Enigma from './Enigma';
import Bombe from './Bombe';

function App() {

    return (

        <Routes>
            <Route path="/"
                element={<Home />}
            />
            <Route path="/caesar-cipher"
                element={<CaesarCipher />}
            />
            <Route path="/enigma-machine"
                element={<Enigma />}
            />
            <Route path="/bombe-machine"
                element={<Bombe />}
            />
        </Routes>

    )
}

export default App
