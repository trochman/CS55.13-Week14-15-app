import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {getList} from '../lib/getdata';

export async function getStaticProps() {
  const allData = getList();
  return {
    props: {
      allData
    }
  }
}

export default function Home({allData}) {
  return (
      <>
        <h1>List of Heeler Family Members</h1>
        <div className="list-group">
          {allData.map(({ id, name }) => (
            <Link href={`/${id}`}>
              <a key={id} className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
      </>
  );
}
