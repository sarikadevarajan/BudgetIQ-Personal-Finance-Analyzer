import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TransactionsTable({ transactions }) {

  return (

    <TableContainer
      component={Paper}
      sx={{
        mt: 5,
        borderRadius: 4,
        color: "rgba(20,20,40,0.75)"
      }}
    >

      <Table sx={{ minWidth: 650, color: "rgba(20,20,40,0.75)" }} aria-label="transactions table">

        <TableHead>

          <TableRow>

            <TableCell>Date</TableCell>

            <TableCell>Description</TableCell>

            <TableCell>Amount</TableCell>

            <TableCell>Category</TableCell>

            <TableCell>Type</TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {transactions.map((row, index) => (

            <TableRow key={index}>

              <TableCell>
                {row.Date}
              </TableCell>

              <TableCell>
                {row.Description}
              </TableCell>

              <TableCell>
                ₹{row.Amount}
              </TableCell>

              <TableCell>
                {row.Category}
              </TableCell>

              <TableCell>
                {row.Transaction_Type}
              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </TableContainer>

  );

}

export default TransactionsTable;