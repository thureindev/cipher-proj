import { Routes, Route } from 'react-router-dom';
import CaesarCipher from './CaesarCipher';
import CaesarCipherAdvanced from './CaesarCipherAdvanced';

function App() {

    return (

        <Routes>
            <Route path="/"
                element={<CaesarCipher />}
            />
            <Route path="/caesar-cipher-advanced"
                element={<CaesarCipherAdvanced />}
            />
        </Routes>

    )
}

export default App
