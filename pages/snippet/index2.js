import React from "react";
import ArchiveBox from "../../components/Icon/ArchiveBox";
import Layout from "../../components/Layout";
import ReactTable from "../../components/ReactTable";
import ReactTablev2 from "../../components/ReactTablev2";
import Table from "../../components/Table";
export default function Index() {
  return (
    <Layout>
      <div className='container mx-auto lg:max-w-7xl mt-10'>
        <h1 className='font-semibold text-4xl'>Snippet List</h1>
        <p className='mt-2'>
          Beberapa koleksi snippetcode yang bisa digunakan secara gratis
        </p>
        <Table
          fields={["Keyword", "Tags", "Button"]}
          items={[
            {
              keyword: "Chained Dropdown Jquery",
              tags: "Jquery",
              button: <ArchiveBox />,
            },
          ]}
        ></Table>
        <ReactTable />
        <ReactTablev2 />
      </div>
    </Layout>
  );
}
