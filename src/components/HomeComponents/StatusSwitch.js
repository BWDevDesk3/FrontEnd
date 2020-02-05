export const statusSwitch = ticket => {
    switch(ticket.resolved){
        case 0:
            return {
                status: 'OPEN',
                color: 'RED'
            };
        default:
            return {
                status: 'SOLVED',
                color: 'GREEN'
        };
    };
};