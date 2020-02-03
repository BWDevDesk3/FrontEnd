export const categorySwitch = ticket => {
    switch(ticket.request_category){
        case 1:
            return {
                name: 'JS',
                color: 'TEST',
                image: ''
            };
        case 2:
            return {
                name: 'CSS',
                color: 'TEST',
                image: ''
            };
        case 3:
            return {
                name: 'NODE',
                color: 'TEST',
                image: ''
            };
        case 4:
            return {
                name: 'REACT',
                color: 'TEST',
                image: ''
            };
        case 5:
            return {
                name: 'REDUX',
                color: 'TEST',
                image: ''
            };
        case 6:
            return {
                name: 'JSON',
                color: 'TEST',
                image: ''
            };
        case 7:
            return {
                name: 'PYTHON',
                color: 'TEST',
                image: ''
            };
        case 8:
            return {
                name: 'GIT',
                color: 'TEST',
                image: ''
            };
        case 9:
            return {
                name: 'POSTMAN',
                color: 'TEST',
                image: ''
            };
        case 10:
            return {
                name: 'YARN',
                color: 'TEST',
                image: ''
            };
        case 11:
            return {
                name: 'LIBS',
                color: 'TEST',
                image: ''
            };
        case 12:
            return {
                name: 'DEPLOY',
                color: 'TEST',
                image: ''
            };
        default:
            return {
                name: 'N/A',
                color: 'DEFA',
                image: ''
            };
    }
}