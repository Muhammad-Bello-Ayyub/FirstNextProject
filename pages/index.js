import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Binayyub List | Home</title>
      </Head>
      <div>
        {/* <Navbar />dropped-in components */}
        <h1 className={styles.title}>Homepage</h1>{/* Referencing styles from external modules */}
        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam, accusamus explicabo placeat eveniet tempore, tempora esse minima aliquam dolores veritatis at aliquid harum porro quaerat tenetur doloremque. Rerum, esse.</p>
        <p className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam, accusamus explicabo placeat eveniet tempore, tempora esse minima aliquam dolores veritatis at aliquid harum porro quaerat tenetur doloremque. Rerum, esse.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam, accusamus explicabo placeat eveniet tempore, tempora esse minima aliquam dolores veritatis at aliquid harum porro quaerat tenetur doloremque. Rerum, esse.</p>
        <Link href="/binayyub" className={styles.btn}>See Bin-ayyub Listings</Link>
      </div>
    </>
  )
}
