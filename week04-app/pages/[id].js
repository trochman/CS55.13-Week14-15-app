import Head from 'next/head';
import {getIDs, getOneData, getList} from '../lib/getdata';

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
    <article className="card col-6">
      <div className="card-body">
        <h5 className="card-title">{dataItem.name}</h5>
        <img src={dataItem.image}></img>
      </div>
    </article>
  );
}