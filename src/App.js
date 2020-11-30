import React, { Component } from 'react';
import './App.css';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Child from './components/childTier';
import childInfo from './components/childInfo';

class App extends Component {
  render() {
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>차일드</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>구분</TableCell>
              <TableCell>던전</TableCell>
              <TableCell>럼블</TableCell>
              <TableCell>듀얼</TableCell>
              <TableCell>레이드</TableCell>
              <TableCell>월보</TableCell>
              <TableCell>종합</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {childInfo.map(c => {
              return <Child key = {c.id} id = {c.id} image = {c.image} name = {c.name} 
              normalSkill = {c.normalSkill} amplifiSkill = {c.amplifiSkill} 
              normalDungeon = {c.normalDungeon} amplifiDungeon = {c.amplifiDungeon}
              normalRumble = {c.normalRumble} amplifiRumble = {c.amplifiRumble} 
              normalDuel = {c.normalDuel} amplifiDuel = {c.amplifiDuel} 
              normalRaid = {c.normalRaid} amplifiRaid = {c.amplifiRaid} 
              normalWorldBoss = {c.normalWorldBoss} amplifiWorldBoss = {c.amplifiWorldBoss} 
              normalTotal = {c.normalTotal} amplifiTotal = {c.amplifiTotal} />
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
