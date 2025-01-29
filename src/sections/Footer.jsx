import { footerLogo } from "../assets/images"
import { socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className="w-full padding-x padding-y bg-black">
      <div className="">
        <div className="flex gap-3 items-center">
          <img src={footerLogo} alt="page logo" width={80} />
          <h1 className="text-3xl text-white font-bold">Snake</h1>
        </div>
        <div className="flex gap-4 mt-10 items-center">
          {socialMedia.map((socail,index)=>
            <div 
            className="bg-white rounded-full p-2" 
            key={index}>
              <a href="#"><img src={socail.src} width={40} alt={socail.alt} /></a>
            </div>
          )}
        </div>
      </div>

      <div></div>
      
    </section>
  )
}

export default Footer
