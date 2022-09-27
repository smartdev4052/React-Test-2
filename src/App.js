import { Routes, Route } from 'react-router';
import { useState } from 'react';

import Header from './Header/Header';
import Members from './Members/Members';
import Todos from './Todos/Todos';
import Teams from './Teams/Teams';

import './App.scss';

import memberData from './Store/Members.json';
import teamData from './Store/Teams.json';
import TodoDetail from './Todos/TodoDetail';
import TodoEdit from './Todos/TodoEdit';
import TodoAdd from './Todos/TodoAdd';
import TeamDetail from './Teams/TeamDetail';

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={ <Members members={memberData.members} /> } />
        <Route path="teams" element={ <Teams teams={teamData.teams} /> } />
        <Route path="todos" element={ <Todos/> } />
        <Route path="todo-detail" element={ <TodoDetail /> } />
        <Route path="todo-edit" element={ <TodoEdit /> } />
        <Route path="todo-add" element={ <TodoAdd /> } />
        <Route path="team-detail" element={ <TeamDetail /> }/>
      </Routes>
    </div>
  );
}

export default App;
