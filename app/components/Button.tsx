import styles from "../style"

const Button = ({style}:{style:string})=>{
    return(
        <>
        <button type="button" className={`mt-3 py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
        </>
    )
}
export default Button