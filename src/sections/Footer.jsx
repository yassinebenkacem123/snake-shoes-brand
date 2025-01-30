import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="w-full padding-x padding-y bg-black">
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

      <div className="max-lg:flex max-lg:flex-col max-lg:items-center  mt-10 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-20">
        {footerLinks.map((link,index)=>
          <div key={index}>
             <h1 className="text-white max-lg:text-4xl font-palanquin  mb-3 font-bold text-[40px]">{link.title}</h1>
             <div className="flex  flex-col gap-3">
               {
                link.links.map((mainLinks,index)=>
                  <a 
                  className="max-lg:text-2xl  text-white 
                  text-lg hover:-translate-y-1
                 hover:text-slate-gray
                  ease-in duration-200" href={mainLinks.name} key={index}>{mainLinks.name}
                  </a>
                )
               }
             </div>
          </div>
        )}
      </div>
      <div className="flex w-full justify-between items-center mt-10">
        <div className="flex gap-4"><img src={copyrightSign} alt="copyright" /><p className="text-lg">Copyright,allrights reserved</p></div>
        <p className="text-lg font-bold text-coral-red">Creact by Yassine Ben kacem The Snake Man {':-)'}</p>
      </div>
      
    </footer>
  )
}

export default Footer
