export const COLUMNS = [
  {
    Header: "No",
    accessor: "no",
    // Footer: "No",
    disableFilters: true,
  },
  {
    Header: "Keyword",
    accessor: "keyword",
    // Footer: "Keyword",
  },
  {
    Header: "Tags",
    accessor: "tags",
    // Footer: "Tags",
  },
  {
    Header: "Action",
    accessor: "action",
    // Footer: "Action",
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
