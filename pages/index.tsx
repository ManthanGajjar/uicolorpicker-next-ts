import { useEffect } from 'react'
import { Utils } from '../utils/utils'
import Header from '../components/header'
import { ToastContainer, Slide } from 'react-toastify'
import SolidColors from '../components/solidColors'
import AllReducers from "../redux/reducers/index";
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { CONSTANCE } from '../helper/constance';
import GradientColors from '../components/gradientColors';
import Colors from '../components/colors'

export default function Home() {
  const store = createStore(AllReducers);
  useEffect( () => {
    const myEmoji = Utils.getRandomEmoji();
    document.title =  "Ui Color Picker " + myEmoji;
  })
  
  return (
    <div className = "container-fluid setTheme">
      <Provider store = {store}>
       <Header/>
       <Colors/>
      </Provider>
       {/* toast config  */}
       <ToastContainer position="top-right"
        hideProgressBar={true}
        newestOnTop={false}
        transition = {Slide}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>

    </div>
  )
}
