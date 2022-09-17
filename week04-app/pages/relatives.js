import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import {getSecondList} from '../lib/getRelativesData';

export async function getStaticProps() {
  const allData = getSecondList();
  return {
    props: {
      allData
    }
  }
}

export default function Relatives({allData}) {
  return (
      <Layout>
        <h1>List of Heeler Family Relatives</h1>
        <div className="list-group">
          {allData.map(({ id, name }) => (
            <Link href={`/${id}`}>
              <a key={id} className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
        </div>
      </Layout>
  );
}