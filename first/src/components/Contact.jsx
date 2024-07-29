import NavBar from "./NavBar";
import Homedetails from "./Homedetails";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
        <NavBar/>
        <h1 className="text-stone-950	 text-center font-bold mt-24 mb-4 text-4xl">CONATCT SECTION</h1>
        <div className="icon text-2xl text-center">
        <i class="fa-solid fa-grip-lines text-white me-3 text-stone-950"></i>
        <i class="fa-solid fa-star text-white text-center text-stone-950"></i>
        <i class="fa-solid fa-grip-lines text-white ms-3 text-stone-950"></i>
        </div>

        <div className="input-group mb-3">
  <div className="input-group-prepend mt-24 ">
    
  </div>
  <input type="text" className="form-control w-6/12	mx-auto" placeholder="Username"/>

</div>

        <Homedetails/>
    
        <Footer/>

    </div>
    )
}
