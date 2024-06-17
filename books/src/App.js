import React from "react";
import BookContextProvider from "src/context/BookContext";
import Navbar from "src/components/Navbar";
import BookList from "src/components/BookList";
import NewBookForm from "src/components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
