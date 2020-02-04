export const statusSwitch = ticket => {
    switch(ticket.resolved){
        case 0:
            return {
                status: 'SOLVED',
                color: 'GREEN'
            };
        default:
            return {
                status: 'OPEN',
                color: 'RED'
        };
    };
};