import Link from 'next/link';
import Layout from '../components/layout';
import {getList} from '../lib/getData';

export async function getStaticProps() {
  const allData = await getList();
  return {
    props: {
      allData
    },
    revalidate: 60
  }
}

export default function Home({allData}) {
  return (
      <Layout>
        <h1>List of All Posts</h1>
        <div className="list-group">
          {allData ?
            allData.map(({ id, name }) => (
              <a key={id} className="list-group-item list-group-item-action">{name}</a>
          ))
        : null}
        </div>
      </Layout>
  );
}
