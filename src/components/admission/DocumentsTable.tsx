import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Box, Button, IconButton, Sheet, Table } from '@mui/joy';
import * as React from 'react';

interface FileData {
  fileName: string,
  fileSize: number
}

interface DepartmentData {
  departmentName: string,
  files: FileData[]
}

const data: DepartmentData[] = [
  {
    departmentName: 'Lab', files: [
      { fileName: 'somefile.pdf', fileSize: 1.23 },
      { fileName: 'anotherfile.pdf', fileSize: 4.2 } ]
  },
  {
    departmentName: 'Radiology', files: [
      { fileName: 'somescan.pdf', fileSize: 4.12 },
      { fileName: 'anotherscan.pdf', fileSize: 6.27 },
      { fileName: 'lastscan.pdf', fileSize: 9.27 } ]
  }
];

function Row(props: { row: DepartmentData; initialOpen?: boolean }) {
  const { row, initialOpen } = props;
  const [open, setOpen] = React.useState(initialOpen || false);

  return (
    <React.Fragment>
      <tr>
        <td>
          <IconButton
            aria-label='expand row'
            variant='plain'
            color='neutral'
            size='sm'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </td>
        <th scope='row'>{row.departmentName}</th>
        <td>{row.files.length}</td>
      </tr>
      <tr>
        <td style={{ height: 0, padding: 0 }} colSpan={6}>
          {open && (
            <Sheet
              variant='soft'
              sx={{ p: 1, pl: 6, boxShadow: 'inset 0 3px 6px 0 rgba(0 0 0 / 0.08)' }}
            >
              <Table
                size='sm'
                sx={{
                  '& > thead > tr > th:nth-of-type(n + 3), & > tbody > tr > td:nth-of-type(n + 2)':
                    { textAlign: 'right' }
                }}
              >
                <thead>
                  <tr>
                    <th>Filename</th>
                    <th>Size</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {row.files.map((fileRow, index) => (
                    <tr key={index}>
                      <th scope='row'>{fileRow.fileName}</th>
                      <td>{fileRow.fileSize} MB</td>
                      <td><Button variant='plain'>Download</Button></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Sheet>
          )}
        </td>
      </tr>
    </React.Fragment>
  );
}

function DocumentsTable() {
  return (
    <Box overflow='auto' height={{ md: '490px' }}>
      <Table
        aria-label='collapsible table'
        size='sm'
        sx={{
          '& > thead > tr > th:nth-of-type(n + 3), & > tbody > tr > td:nth-of-type(n + 2)':
            { textAlign: 'right' },
          '& > tbody > tr:nth-of-type(odd) > td, & > tbody > tr:nth-of-type(odd) > th[scope="row"]':
            { borderBottom: 0 }
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 40 }} aria-label='empty' />
            <th style={{ width: '60%' }}>Department</th>
            <th style={{ width: '40%' }}>Total files</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <Row key={row.departmentName} row={row} initialOpen={false} />
          ))}
        </tbody>
      </Table>
    </Box>
  );
}

export default DocumentsTable;
