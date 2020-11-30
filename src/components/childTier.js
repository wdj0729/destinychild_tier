import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './childTier.css';

class Child extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell><img src={this.props.image} alt ="profile"/></TableCell>
                <TableCell classes={{root:'table-row1'}}>{this.props.name}</TableCell>
                <TableCell>
                    <TableRow classes={{root:'table-row1'}}>{this.props.normalSkill}</TableRow><br></br>
                    <TableRow classes={{root:'table-row2'}}>{this.props.amplifiSkill}</TableRow>
                </TableCell>
                <TableCell>
                    <TableRow classes={{root:'table-row1'}}>{this.props.normalDungeon}</TableRow><br></br>
                    <TableRow classes={{root:'table-row2'}}>{this.props.amplifiDungeon}</TableRow>
                </TableCell>
                <TableCell>
                    <TableRow classes={{root:'table-row1'}}>{this.props.normalRumble}</TableRow><br></br>
                    <TableRow classes={{root:'table-row2'}}>{this.props.amplifiRumble}</TableRow>
                </TableCell>
                <TableCell>
                    <TableRow classes={{root:'table-row1'}}>{this.props.normalDuel}</TableRow><br></br>
                    <TableRow classes={{root:'table-row2'}}>{this.props.amplifiDuel}</TableRow>
                </TableCell>
                <TableCell>
                    <TableRow classes={{root:'table-row1'}}>{this.props.normalRaid}</TableRow><br></br>
                    <TableRow classes={{root:'table-row2'}}>{this.props.amplifiRaid}</TableRow>
                </TableCell>
                <TableCell>
                    <TableRow classes={{root:'table-row1'}}>{this.props.normalWorldBoss}</TableRow><br></br>
                    <TableRow classes={{root:'table-row2'}}>{this.props.amplifiWorldBoss}</TableRow>
                </TableCell>
                <TableCell>
                    <TableRow classes={{root:'table-row1'}}>{this.props.normalTotal}</TableRow><br></br>
                    <TableRow classes={{root:'table-row2'}}>{this.props.amplifiTotal}</TableRow>
                </TableCell>
            </TableRow>
        )
    }
}

export default Child;