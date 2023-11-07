import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import TextEditor from './components/TextEditor'
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate to={`/document/${uuidv4()}`} />}>
        </Route>
        <Route path="/document/:id" Component={TextEditor}></Route>
      </Routes>
    </Router>
  )
}

export default App