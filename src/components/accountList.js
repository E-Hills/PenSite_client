import React, { useEffect, useState } from "react";
 
const Account = (props) => (
 <tr>
   <td>{props.account.email}</td>
   <td>{props.account.password}</td>
   <td>
      <button
        onClick={() => {
          props.deleteAccount(props.account._id);
        }}
      >
        Delete
     </button>
   </td>
 </tr>
);
 
export default function AccountList() {
 const [accounts, setAccounts] = useState([]);
 
 // This method fetches the accounts from the database.
 useEffect(() => {
   async function getAccounts() {
     const response = await fetch(`http://localhost:5000/account/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const accounts = await response.json();
     setAccounts(accounts);
   }
 
   getAccounts();
 
   return;
 }, [accounts.length]);
 
 // This method will delete a account
 async function deleteAccount(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newAccounts = accounts.filter((el) => el._id !== id);
   setAccounts(newAccounts);
 }
 
 // This method will map out the accounts on the table
 function accountList() {
  return accounts.map((account) => {
    return (
      <Account
        account={account}
        deleteAccount={() => deleteAccount(account._id)}
        key={account._id}
      />
    );
  });
 }
 
 // This following section will display the table with the accounts of individuals.
 return (
   <div className="inner">
     <h3>Account List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Email</th>
           <th>Password (Hashed)</th>
         </tr>
       </thead>
       <tbody>{accountList()}</tbody>
     </table>
   </div>
 );
}