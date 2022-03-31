import ProfilePic from "./Component/Profile/ProfilePhoto.js";
import Adress from "./Component/Profile/Address";
import Name from "./Component/Profile/FullName";
import './App.css';

function App() {
  return (
    <div className="App">

      <ProfilePic />
      <Name />
      <Adress />

    </div>
  );
}

export default App;
