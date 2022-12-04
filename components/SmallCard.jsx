import Image from 'next/image'

const SmallCard = ({ img, location, distance }) => {
  return (
    <button className="border border-solid border-slate-200 rounded-xl hover:shadow-md transition-all transform duration-200 ease-out flex items-center gap-3 hover:scale-105 hover:bg-blue-100">
        <Image src={img} width="70" height="70" className='rounded-xl' />
        <div>
            <h2 className='text-sm font-semibold text-left'>{ location }</h2>
            <h3 className='text-xs text-slate-600'>{distance}</h3>
        </div>
        
    </button>
  )
}

export default SmallCard