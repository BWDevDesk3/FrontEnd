export const statusSwitch = ticket => {
    switch(ticket.resolved){
        case 0:
            return {
                status: 'CLOSED',
                color: 'GREEN'
            };
        default:
            return {
                status: 'OPEN',
                color: 'RED'
        };
    };
};