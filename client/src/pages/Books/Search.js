import React from 'react';






const Search = (props) => {
 return (
   <div className="seach-form">
       <form onSubmit={props.searchBook}action="">
           <input onChange={props.handlesearch} type="text"/>
           <button type="submit">Search</button>
       </form>




   </div>
 );
}
export default Search;