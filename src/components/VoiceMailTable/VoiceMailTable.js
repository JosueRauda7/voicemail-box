import React from "react";

//UI Components
import Table from "@material-ui/core/Table";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//Assets
import styles from './VoiceMailTable.module.css';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const useStyles = makeStyles({
	table: {
        minWidth: 700,
        maxWidth: 700
	},
});

const VoiceMailTable = (props) => {

    const classes = useStyles();

	return (
		<div>
			<TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>From</StyledTableCell>
                            <StyledTableCell align="left">To</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            <StyledTableCell align="left">Duration (s)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={styles.table}>
                        <TableRow>
                            <StyledTableCell component="th" scope="row">{props.voicemail.from}</StyledTableCell>
                            <StyledTableCell align="right">{props.voicemail.to}</StyledTableCell>
                            <StyledTableCell align="right">{props.voicemail.file}</StyledTableCell>
                            <StyledTableCell align="right">{props.voicemail.stimestap}</StyledTableCell>
                        </TableRow>
                    </TableBody>
                </Table>
			</TableContainer>
		</div>
	);
};

export default VoiceMailTable;
