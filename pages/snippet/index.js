import { useMemo } from "react";

import Layout from "../../components/Layout";
import ReactTableFilter from "../../components/ReactTableFilter";
import { COLUMNS } from "../../lib/snippet_column";
import DATA from "../../lib/snippet_data.json";

// import ArchiveBox from "../../components/Icon/ArchiveBox";
// import Table from "../../components/Table";
export default function Index() {
  const columns = useMemo(() => COLUMNS, []);

  const data = useMemo(() => DATA, []);

  return (
    <Layout>
      <div className='container mx-auto lg:max-w-7xl mt-10'>
        <h1 className='font-semibold text-4xl'>Snippet List</h1>
        <p className='mt-2'>
          Beberapa koleksi snippetcode yang bisa digunakan secara gratis
        </p>
        {/* <Table
          fields={["Keyword", "Tags", "Button"]}
          items={[
            {
              keyword: "Chained Dropdown Jquery",
              tags: "Jquery",
              button: <ArchiveBox />,
            },
          ]}
        ></Table> */}
        <ReactTableFilter columns={columns} data={data} />
      </div>
    </Layout>
  );
}
