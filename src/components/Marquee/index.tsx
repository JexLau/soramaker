import Image from "next/image"
import lBlue from '@/images/blue-left-neon-line.svg'
import lGreen from '@/images/green-left-neon-line.svg'
import lPurple from '@/images/purple-left-neon-line.svg'
import rPurple from '@/images/purple-right-neon-line.svg'
import rGreen from '@/images/green-right-neon-line.svg'
import rBlue from '@/images/blue-right-neon-line.svg'


export const Marquee = () => {
  return <>
  <div className="absolute overflow-hidden z-[-1] w-full space-y-20">
        <div className="rfm-marquee">
          <Image alt="easy to use" className="rotate-180 mx-auto aspect-auto rounded-t-xl object-cover object-center" src={rPurple} />
        </div>
        <div className="rfm-marquee-second">
          <Image alt="easy to use" className="mx-auto aspect-auto rounded-t-xl object-cover object-center" src={lGreen} />
        </div>
        <div className="rfm-marquee-third">
          <Image alt="easy to use" className="mx-auto aspect-auto rounded-t-xl object-cover w-1/2 object-right" src={lBlue} />
        </div>
      </div>
      <div className="absolute overflow-hidden z-[-1] bottom-12 w-full  space-y-20">
        <div className="rfm-marquee-reverse">
          <Image alt="easy to use" className="rotate-180 mx-auto aspect-auto rounded-t-xl object-cover object-center" src={lPurple} />
        </div>
        <div className="rfm-marquee-reverse-second">
          <Image alt="easy to use" className="mx-auto aspect-auto rounded-t-xl object-cover object-center" src={rGreen} />
        </div>
        <div className="rfm-marquee-reverse-third">
          <Image alt="easy to use" className="mx-auto aspect-auto rounded-t-xl object-cover w-1/2 object-right" src={rBlue} />
        </div>
      </div>
    </>
}
