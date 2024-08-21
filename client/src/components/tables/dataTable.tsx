import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useEffect, useState } from 'react';
import { DemoTreeDataValue } from '@mui/x-data-grid-generator/services/tree-data-generator';
import { getValueFromSelector } from '../../utils/getValueFromSelector';
import SectionHeader from '../ui/sectionHeader';
import { useAppContext } from '../../context/appContext';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
};

export default function ExportCustomToolbar() {
  const { DataState } = useAppContext();
  const { apiData } = DataState;
  const [tableData, setTableData] = useState<DemoTreeDataValue>({columns: [], rows: []});

  const { loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });

  useEffect(() => {
    formatData();
  },[apiData]);

  // Create MUI table data 
  const formatData = () => {
    const columns = [
      { field: "fieldName", headerName: "Name", width: 150 },
      { field: "value", headerName: "Value", width:300},
      { field: "selector", headerName: "Selector", width: 300 },
      { field: "useApi", headerName: "API" },
      { field: "website", headerName: "URL", width: 300 }
    ];
    
    const rows = apiData.map((data) => {
      return { ...data, 
        id: data._id, 
        selector: data.selector.length > 0 ? data.selector : "Not Selected",
        value: data.useApi ? data.value : getValueFromSelector(data.selector) }
    });

    setTableData({ columns, rows });
  };

  return (
    <div className='w-full h-fit'>
      <div className='mb-2'>
        <SectionHeader text={"Data Export Table"} />
      </div>

      <DataGrid
        {...tableData}
        loading={loading}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};
