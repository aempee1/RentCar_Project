import { Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Paper } from '@mui/material'

function Order_summary() {

  const { t, i18n } = useTranslation()

  return (
    <TableContainer sx={{ maxWidth: 500, margin: "0 auto" }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography variant='subtitle1'>{t("Package")}</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='subtitle1'>A1</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography variant='subtitle1'>{t("Price")}</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='subtitle1'>1,800.00 ฿</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography variant='subtitle1'>{t("Days")}</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='subtitle1'>3</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontWeight='bold'>{t("Total")}</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontWeight='bold'>5,400.00 ฿</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

      </Table>
    </TableContainer>
  )
}

export default Order_summary