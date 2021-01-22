import { useEffect } from 'react'
import { Utils } from '../utils/utils'
import Header from '../components/header'
import { ToastContainer, Slide } from 'react-toastify'
import SolidColors from '../components/solidColors'

export default function Home() {

  useEffect( () => {
    const myEmoji = Utils.getRandomEmoji();
    document.title =  "Ui Color Picker " + myEmoji;
  })

  return (
    <div>
      <div className = "setTheme">
       <Header/>
       <SolidColors/>
      </div>
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
