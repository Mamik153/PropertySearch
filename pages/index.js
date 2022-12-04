import Head from 'next/head'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import SmallCard from '../components/SmallCard';
import styles from '../styles/Home.module.css'

export default function Home({ exploreData }) {

  console.log("PROPS", exploreData);

  return (
    <div className="min-h-screen max-w-screen">
      <Head>
        <title>Property & Real Estate Search - Airbnb Style</title>
        <link rel="icon" href='/favicon.ico' />
      </Head>

      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />

      <main className='max-w-7xl w-full mx-auto px-5 py-10'>
        <section>
          <h2 className='text-xl sm:text-3xl font-semibold pb-5'>Localities you may like.</h2>

          <div className='grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-3'>
            {
              exploreData?.map((item, index) => {
                return(
                  <SmallCard key={index} img={item.img} location={item.location} distance={item.distance} />
                )
              })
            }
          </div>
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps() {
   const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) => res.json());

   return {
    props: {
      exploreData
    }
   }
}