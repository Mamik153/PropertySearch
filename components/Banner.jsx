import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px]">
        <Image src="https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=3" layout="fill" objectFit="cover" className="bg-bottom" />
    </div>
  )
}

export default Banner