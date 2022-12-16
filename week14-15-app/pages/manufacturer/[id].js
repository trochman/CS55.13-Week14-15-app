import Layout from '../../components/layout';
import getIDs from '../../lib/getManufacturerData';
import getDynamicData from '../../lib/getData';

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
          <h5 className="card-title">{itemData.post_title}</h5>
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields}} />
          <h5 className="card-text">Posted by<br></br>{itemData.display_name}</h5>
        </div>
      </article>
    </Layout>
  );
}
