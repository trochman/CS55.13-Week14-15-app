import Layout from '../../components/layout';
import {getIDs, getDynamicData} from '../../lib/getManufacturerData';

export async function getStaticProps({ params }) {
  const itemData = await getDynamicData(params.id);
  return {
    props: {
      itemData
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = await getIDs();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.post_title}</h5><br></br>
          <h5 className="card-text">{itemData.acf_fields.manufacturer_name}</h5><br></br>
          <h5 className="card-text">Address:</h5>
          <p className="card-text">{itemData.acf_fields.manufacturer_address}</p><br></br>
          <h5 className="card-text">Contact:</h5>
          <p className='card-text'>{itemData.acf_fields.manufacturer_contact}</p><br></br>
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}} />
          <h5 className="card-text">Posted by</h5>
          <p className='card-text'>{itemData.display_name}</p>
        </div>
      </article>
    </Layout>
  );
}
