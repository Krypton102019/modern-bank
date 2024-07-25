import styles, { layout } from "../style"

const Billing = ()=>{
    return(
        <>
       <section className=" flex md:flex-row flex-col-reverse  text-white justify-center align-item-center">
        <div>
            <img src="/bill.png" alt="" />
        </div>

        <div className="flex flex-col justify-center  ">
        <h2 className={ `mt-5  ${styles.heading2}`}>Easily control your billing & invoicing.</h2>
        <p className={`mt-5 max-w-[470px] ${styles.paragraph}`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className=" flex flex-row flex-wrap sm:mt-10 mt-6">
        <img className=" cursor-pointer  " src="/google.svg" alt="" />
        <img className="cursor-pointer  ml-4 sm:mx-5" src="/apple.svg" alt="" />
        </div>
        </div>
       </section>
        </>
    )
}
export default Billing