import { useMemo } from "react";

import Layout from "../../components/Layout";
// import Table from "../../components/Table";
import ReactTableFilter from "../../components/ReactTableFilter";
import { COLUMNS } from "../../lib/reference_column";
import DATA from "../../lib/reference_data.json";

export default function Index() {
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
