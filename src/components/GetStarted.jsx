import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary rounded-full w-full h-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-normal text-[18px] leading-[23px] mr-3">
          <span className="text-gradient ">Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-normal text-[18px] leading-[23px]">
          <span className="text-gradient ">Started</span>
        </p>
      </div>

    </div>

  </div>
)


export default GetStarted