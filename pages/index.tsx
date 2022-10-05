import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
       
      </Head>

      <main className="grid grid-cols-9">
        <SideBar />
        <Feed />
        <Widgets />
      </main>

  
    </div>
  )
}

export default Home
