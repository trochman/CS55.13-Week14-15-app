import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import {getList} from '../lib/getFamilyData';

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
      <Layout>
        <h1>List of Heeler Family Members</h1>
        <div className="list-group">
          {allData ?
            allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))
        : null}
        </div>
      </Layout>
  );
}
