import { HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import DoctorsPage from './pages/DoctorsPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div>
    <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "green",
              },
            },
          }}
        ></Toaster>
      </div>
      <RecoilRoot>
        <HashRouter>
          <Routes>
            <Route path='/' element={<DoctorsPage />} />
          </Routes>
        </HashRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;