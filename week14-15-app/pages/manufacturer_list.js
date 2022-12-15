import Link from 'next/link';
import Layout from '../components/layout';
import {getList} from '../lib/getManufacturerData';

export async function getStaticProps() {
  const allData = await getList();
  return {
    props: {
      allData
    }
  }
}

export default function Manufacturers({allData}) {
  return (
      <Layout>
        <h1>List of Manufacturers</h1>
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