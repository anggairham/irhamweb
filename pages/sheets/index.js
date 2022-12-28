import Layout from "../../components/Layout";

import { getSheet } from "../../libs/sheets";

export default function IndexPage({ dataSheet }) {
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-7xl mt-10'> </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const dataSheet = await getSheet();
  return {
    // props: {
    //   dataSheet: dataSheet.slice(1, dataSheet.length), // remove sheet header
    // },
    props: {
      dataSheet: dataSheet,
    },
    revalidate: 1, // In seconds
  };
}
