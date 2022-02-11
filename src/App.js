import "./App.css";
import { authentication } from "./firebase-config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { get } from 'axios';

function App() {
  let token

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        if (result.user) {
          token = result._tokenResponse.oauthIdToken;
          console.log(`Token: ${token}`)
        }
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signOutWithGoogle = () => {
    signOut(authentication)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const dataGoogle = () => {
    console.log(`auth: ${authentication}`)
    console.log(`token: ${token}`)
  };
  const submit = (e) => {
    e.preventDefault()
    fileUpload().then((response) => {
      console.log(response.data);
    })
  };
  const fileUpload = () => {
    const url = 'https://us-central1-skydropx-341017.cloudfunctions.net/function-private';
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization':`Bearer ${token}`
      }
    }
    return get(url, {}, { headers : config.headers})
  };

  return (
    <div className="App">
      <div>
        <button onClick={signInWithGoogle}>Sign In</button>
        <button onClick={signOutWithGoogle}>Sign Out</button>
        <button onClick={dataGoogle}>Get Data</button>
      </div>
      <div>
        <form onSubmit={submit}>
          <h1>File Upload</h1>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default App;
