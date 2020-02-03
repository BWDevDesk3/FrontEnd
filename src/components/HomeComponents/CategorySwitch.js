export const categorySwitch = ticket => {
    switch(ticket.request_category){
        case 1:
            return {
                name: 'JS',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 2:
            return {
                name: 'CSS',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 3:
            return {
                name: 'NODE',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 4:
            return {
                name: 'REACT',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 5:
            return {
                name: 'REDUX',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 6:
            return {
                name: 'JSON',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 7:
            return {
                name: 'PYTHON',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 8:
            return {
                name: 'GIT',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 9:
            return {
                name: 'POSTMAN',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 10:
            return {
                name: 'YARN',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 11:
            return {
                name: 'LIBS',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        case 12:
            return {
                name: 'DEPLOY',
                color: '#2db7f5',
                image: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
            };
        default:
            return {
                name: 'N/A',
                color: 'ORANGE',
                image: ''
            };
    }
}