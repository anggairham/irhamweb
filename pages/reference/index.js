import { useMemo } from "react";

import Layout from "../../components/Layout";
// import Table from "../../components/Table";
import ReactTableFilter from "../../components/ReactTableFilter";
import { COLUMNS } from "../../libs/reference_column";
import { getSheet } from "../../libs/sheets";

export default function Index({ DATA }) {
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => DATA, []);
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-7xl mt-10'>
        <h1 className='font-semibold text-4xl'>Reference List</h1>
        <p className='mt-2'>
          Beberapa referensi website yang digunakan ketika belajar bahasa
          pemrograman
        </p>
        <ReactTableFilter columns={columns} data={data} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const DATA = await getSheet();
  return {
    props: {
      DATA: DATA,
    },
    revalidate: 1, // In seconds
  };
}
