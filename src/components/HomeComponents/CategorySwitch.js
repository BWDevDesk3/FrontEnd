export const categorySwitch = category => {
    switch(category){
        case 'JavaScript':
            return {
                color: 'RED'
            };
        default:
            return {
                color: 'GREEN'
            };
    }
}