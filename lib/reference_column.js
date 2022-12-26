export const COLUMNS = [
  {
    Header: "No",
    accessor: "no",
    disableFilters: true,
    filterable: false,
    minWidth: 80,
    Cell: (props) => {
      const rowIdx = props.row.id;
      return <div>{parseInt(rowIdx) + 1}</div>;
    },
  },
  {
    Header: "Keyword",
    accessor: "keyword",
  },
  {
    Header: "Link",
    accessor: "link",
  },
  {
    Header: "Tags",
    accessor: "tags",
  },
  {
    Header: "Action",
    accessor: "action",
    Cell: (props) => {
      const rowIdx = props.row.id;
      return (
        <div>
          <span onClick={() => openTutorial(rowIdx)}>
            <i className='far fa-edit action mr-2'></i> hai
          </span>

          <span onClick={() => deleteTutorial(rowIdx)}>
            <i className='fas fa-trash action'></i>
          </span>
        </div>
      );
    },
  },
];
