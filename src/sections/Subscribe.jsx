import Login from "../components/login"
const Subscribe = () => {
  return (
    <section className="padding-x padding-y">
      <h1 className="text-center text-[70px] font-bold font-palanquin">
        Subscribe for more <span className="text-coral-red">updates</span> & <span className="text-coral-red">newsletter</span></h1>
      <div className="max-container flex justify-center items-center ">
        <Login>
           <Login.Button />
           <Login.Content />
        </Login>

      </div>

    </section>
  )
}

export default Subscribe
