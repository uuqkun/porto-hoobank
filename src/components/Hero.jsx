import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import Stats from './Stats'

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* HERO LEFT SIDE */}
    <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 xl:px-0 px-6`}>
      <div className="flex flex-row items-center bg-discount-gradient py-[6px] px-4 rounded-[10px] mb-2">
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for
          <span className="text-white"> 1 Month</span> Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className='sm:block' />
          <span className='text-gradient'>Generation</span> {" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]">Payment Method.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
    </div>

    {/* HERO RIGHT SIDE */}
    <div className='relative flex flex-1'>
      <img src={robot} alt="robot" className="relative w-[100%] h-[100%] z-[5]" />

      <div className='absolute top-0 z-[0] w-[40%] h-[35%] pink__gradient' />
      <div className='absolute bottom-40 z-[1] w-[80%] h-[80%] white__gradient rounded-full' />
      <div className='absolute right-20 bottom-20 z-[0] w-[50%] h-[50%] blue__gradient' />
    </div>
  </section>
)
export default Hero