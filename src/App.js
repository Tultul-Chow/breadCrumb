import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import MyName from './pages/MyName'
import MySuperSecretProject from './pages/MySuperSecrectProject'
import MySuperSecrectFile from './pages/MySuperSecretFile'
import File from './pages/File'
import Project from './pages/Project'
import Header from './components/Header'
import './App.css'
import BreadCrumb from './components/BreadCrumb'

const Separator = ({ children, ...props }) => (
  <span style={{ color: 'teal' }} {...props}>
    {children}
  </span>
)

const files = {
  paths: [
    { to: '/', mark: 'Home' },
    { to: '/MyName', mark: 'My Name' },
    { to: '/MySuperSecretProject', mark: 'My Super Secret Project' },
    { to: '/MySuperSecretFile', mark: 'My Super Secret File' },
    { to: '/File', mark: 'File' },
    { to: '/Project', mark: 'Project' },
  ],
}


const App = () => (
  <div className='app'>
    <Header/>
    <Router>
            <BreadCrumb separator={<Separator> //</Separator>}>
              {files.paths.map(({ to, mark }) => {
      
                return (
                  <div>
      
                    <Link to={to}>{mark}</Link>
                  </div>
                )
              })}
            </BreadCrumb>
  
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/MyName"><MyName /></Route>
        <Route path="/MySuperSecretProject"><MySuperSecretProject /></Route>
        <Route path="/MySuperSecretFile"><MySuperSecrectFile /></Route>
        <Route path="/File"><File /></Route>
        <Route path="/Project"><Project /></Route>
      </Switch>
    </Router>
  </div>
)

export default App
