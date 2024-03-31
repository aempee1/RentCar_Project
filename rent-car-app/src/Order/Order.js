import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Order.css'
import Navbar from '../Navbar/navbar'

function createData(order, days, price, status) {
  return { order, days, price, status };
}

const status=[
    'Complete',
    'In Progress',
    'Cancel',
]

const rows = [
  createData('Package A1', 3, "1,800 ฿", status[0]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A2', 1, "1,800 ฿", status[2]),
  createData('Package A3', 2, "1,800 ฿", status[1]),
  createData('Package A2', 4, "1,800 ฿", status[2]),
  createData('Package A2', 4, "1,800 ฿", status[2]),
  createData('Package A2', 4, "1,800 ฿", status[2]),
  createData('Package A2', 4, "1,800 ฿", status[2]),
  createData('Package A2', 4, "1,800 ฿", status[2]),
];

export default function BasicTable() {
  return (
    <div className='order-wrap'>
        <Navbar/>
        <div className="table_title">My Order</div>
    <TableContainer sx={{width:1200, maxHeight:500,
    borderRadius:"15px",
    border:"2px solid rgb(38, 80, 115)",
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',}} component={Paper}>
      <Table stickyHeader sx={{ minWidth: 650,}} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell width={200} align="center" sx={{backgroundColor: '#265073'}}>
                <div className="table_head">
                Order
                </div>
            </TableCell>
            <TableCell className="table_head" align="center" sx={{backgroundColor: '#265073'}}> <div className="table_head">
                Days
                </div></TableCell>
            <TableCell className="table_head" align="center" sx={{backgroundColor: '#265073'}}> <div className="table_head">
                Price
                </div></TableCell>
            <TableCell className="table_head" align="center" sx={{backgroundColor: '#265073'}}> <div className="table_head">
                Status
                </div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
            >
              <TableCell className="table_desc" component="th" scope="row" align="center">
              <div className="table_desc" >{row.order}</div>
              </TableCell>
              <TableCell className="table_desc" align="center">
                <div className="table_desc" >{row.days}</div>
                </TableCell>
              <TableCell className="table_desc" align="center"><div className="table_desc" >{row.price}</div></TableCell>
              <TableCell className="table_desc" align="center"><div className="table_desc" >{row.status}</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
