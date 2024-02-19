import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CardSectionLayout } from "../CardSectionLayout";
import { useStyles } from "./styles";
import { data } from "./Mock";
import { FinancesDataSectionViewModel } from "./FinancesDataSectionViewModel";

export const FinancesDataSection = () => {
  const styles = useStyles();
  const viewModel = new FinancesDataSectionViewModel(data);

  return (
    <CardSectionLayout title="Finance data">
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "darkcyan" }}>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Transaction Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {viewModel.getData().map((finance) => (
              <TableRow key={finance.id}>
                <TableCell>{finance.date}</TableCell>
                <TableCell>{finance.transaction_type}</TableCell>
                <TableCell>{finance.description}</TableCell>
                <TableCell>{finance.amount}</TableCell>
                <TableCell>{finance.category}</TableCell>
                <TableCell>{finance.status}</TableCell>
                <TableCell>
                  {finance.status !== "Approved" && (
                    <Button sx={styles.container.action}>Edit</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardSectionLayout>
  );
};
