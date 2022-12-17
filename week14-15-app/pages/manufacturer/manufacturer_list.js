import Link from 'next/link';
import Layout from '../../components/layout';
import {getList} from '../../lib/getManufacturerData';
import { Container } from "@chakra-ui/react";

export async function getStaticProps() {
  const allData = await getList();
  return {
    props: {
      allData
    },
    revalidate: 60
  }
}

export default function Manufacturers({allData}) {
  return (
      <Container>
        <h1>List of Manufacturers</h1>
        <div className="list-group">
          {allData ?
            allData.map(({ id, name }) => (
            <Link key={id} href={`/manufacturer/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))
        : null}
        </div>
      </Container>
  );
}