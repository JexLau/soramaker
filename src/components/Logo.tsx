import Image from 'next/image'
import logo from '@/images/logo.svg'
export function Logo(props: { className?: string }) {
  return (
    <div className='flex items-center max-w-[250px]'>
      <Image src={logo} alt={'AI Sora Maker'} unoptimized  {...props} />
      <p className='text-[#E0552E] text-lg font-bold max-w-[200px] ml-4 lg:inline'>Sora Maker</p>
    </div>
  )
}
