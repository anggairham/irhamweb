import ArchiveBox from "../../components/Icon/ArchiveBox";
import Layout from "../../components/Layout";
import ReactTable from "../../components/ReactTable";
import Table from "../../components/Table";
import { useMemo } from "react";
import makeData from "../../lib/makeData";
export default function Index() {
  const columns = useMemo(() => [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Visits",
      accessor: "visits",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Profile Progress",
      accessor: "progress",
    },
  ]);

  const data = useMemo(() => makeData(), []);

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
        <ReactTable columns={columns} data={data} />
      </div>
    </Layout>
  );
}
