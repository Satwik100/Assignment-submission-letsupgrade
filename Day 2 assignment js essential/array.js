// 1. Create a array with 10 numbers and print 
// only the even numbers with a loop from that array


let art=[12,23,28,53,55,3,5,7,54,9];
console.log("Even numbers are")
for(i=0;i<10;i++)
{
    store=art[i]%2
    if(store==0)
    {
        console.log(art[i])
    }
    else
    {
        continue
    }
}   


// 2. Create a array with five city names 
// and print it in reverse order

let city=["Kolkata","Delhi","Mumbai","Chennai","Pune"]
i=5
while(i!=0)
{
    console.log(city[i-1])
    i--
}