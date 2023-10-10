// Analyses
// What to do? to track account balances & perform transactions
// How to do? Balance + Deposit - withdrawal; transaction are credit & debit 
// Credit : deposit - debt;
// debit : balance - withdrawal;

let accountBalance = 100000;

function deposit(deposit) 
{
    if(isNaN(deposit)|| deposit<=0)
    {
        return "invalid input";
    }
    accountBalance += deposit;
    console.log (`new balance: ${accountBalance}`)
}
const withdrawal = (withdrawalAmount)=> 
{
    if(isNaN(withdrawalAmount)|| withdrawalAmount<=0)
    {
    return "invalid input";
    }
    accountBalance -= withdrawalAmount;
    console.log (`new balance: ${accountBalance}`);
    console.log (`withdrawal amount: ${accountBalance}`);
}
function viewBalance ()
{
    console.log(`account balance: ${accountBalance}`);    
}
let depositResult = deposit(50000.00);
let withdrawalResult = withdrawal(50000.00)
let viewBalanceResult = viewBalance (); 
 

