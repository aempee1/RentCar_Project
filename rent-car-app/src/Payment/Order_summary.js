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
              <Typography variant='subtitle1' fontFamily={'Didact Gothic'}>{t("Package")}</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontFamily={'Didact Gothic'}>A1</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontFamily={'Didact Gothic'}>{t("Price")}</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontFamily={'Didact Gothic'}>1,800.00 ฿</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontFamily={'Didact Gothic'}>{t("Days")}</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontFamily={'Didact Gothic'}>3</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontWeight='bold' fontFamily={'Didact Gothic'}>{t("Total")}</Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography variant='subtitle1' fontWeight='bold' fontFamily={'Didact Gothic'}>31,570.00 ฿</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}

export default Order_summary