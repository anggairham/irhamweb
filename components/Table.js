export default function Table(props) {
  const { fields = [], items = [] } = props;
  return (
    <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            {fields.map((data, index) => (
              <th key={index} className='py-3 px-6'>
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((row, index) => (
            <tr
              key={index}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
            >
              {Object.values(row).map((value, key) => (
                <td key={key} className='py-2 px-6'>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
