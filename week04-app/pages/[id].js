import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import {getIDs, getOneData} from '../lib/getFamilyData';

export async function getStaticProps({params}){
  let id;
  const dataItem = await getOneData(params.id);
  return {
    props: {
      dataItem
    }
  };
}

export async function getStaticPaths() {
  const dynamicPaths = getIDs();
  return {
    paths: dynamicPaths,
    fallback: false
  };
}

export default function dataEntry({dataItem}) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{dataItem.name}</h5>
          <Image className="card-img" src={dataItem.image} height={150} width={150} alt={"Picture of" + dataItem.name}></Image>
        </div>
      </article>
    </Layout>
  );
}