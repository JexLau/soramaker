import Image from 'next/image'
import logo from '@/images/logo.svg'
export function Logo(props: { className?: string }) {
  return (
    <div className='flex items-center max-w-[250px]'>
      <Image src={logo} alt={'AI Sora Maker'} unoptimized  {...props} />
      <p className='text-main-bg bg-gradient-to-l from-main-blue to-main-purple bg-clip-text text-transparent text-[14px] max-w-[200px] ml-2'>
        <span>Sora</span>
        <span>Maker</span>
      </p>
    </div>
  )
}
