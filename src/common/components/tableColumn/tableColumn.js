import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class TableColumn extends Component {
    renderHead = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>
                        {this.props.columnData.head}
                    </TableCell>
                </TableRow>
            </TableHead>
        );
    };

    renderBody = () => {
        return (
            <TableBody>
                <TableRow>
                    <TableCell>
                        {this.props.columnData.body}
                    </TableCell>
                </TableRow>
            </TableBody>
        );
    };

    render() {
        return (
            <Table>
                {this.renderHead()}
                {this.renderBody()}
            </Table>
        )
    }
}

export default TableColumn;