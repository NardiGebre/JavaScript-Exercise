//Analysis
//Use console log instead of console.error
let dayofWeek = 5;
let nameofDay;

switch (dayofWeek) {
    case 1:
            nameofDay ='Monday';        
            break;

    case 2:
             nameofDay ='Tuesday';    
            break;

    case 3:
            nameofDay ='Wednesday';    
            break;

    case 4:
            nameofDay ='Thursday';    
             break;

    case 5:
            nameofDay ='Friday';    
            break;
    case 6:
            nameofDay ='Saturday';    
            break;
    case 7:
            nameofDay ='Sunday';        
        
     default:
             console.error('wrong input for the week days try again');
        }
if (dayofWeek<=7 && dayofWeek>=1)
{
    console.log (`day of the week:{nameofDay}
input day: ${dayofWeek} `);
    }