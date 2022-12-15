import Layout from '../components/layout';
import { getIDs, getDynamicData } from '../lib/getData';

export async function getStaticProps({ params }) {
  const itemData = await getDynamicData(params.id);
  return {
    props: {
      itemData
    }
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
        </div>
      </article>
    </Layout>
  );
}

//<h6 className="card-subtitle mb-2 text-muted">{itemData.display_name}</h6>