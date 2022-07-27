const mainColors = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2:'#495A75',
    dark3:'#8092AF',
    dark4: '#EDEEF0',
    grey1: '#7D8797',
    grey2:'#EEEEEE',
    grey3:'#E9E9E9',
    grey4:'#EDEEF0',
    grey5:'#B1B7C2',
    blue1:'#0066CB',
    black1: '#0000',
    black2: 'rgba(0, 0, 0, 0.5)',
    red1:'red'

    
};

export const colors = {
    primary:mainColors.green1,
    secondary:mainColors.dark1,
    third:mainColors.dark4,
    white:'white',
    black:'black',
    blue1:mainColors.blue1,
    text:{
        primary:mainColors.dark1,
        secondary:mainColors.grey1,
        menuInactive:mainColors.dark2,
        menuActive:mainColors.green1,
        disabled:mainColors.dark3
    },
    button:{
        primary:{
            background: mainColors.green1,
            text: mainColors.grey3,
        },
        secondary:{
            background: 'white',
            text: mainColors.dark1,
        },
        disable:{
            text:mainColors.grey5,
            background:mainColors.grey4
        }
    },
    border:{
        primary:mainColors.grey2,
        secondary:mainColors.grey3
    },
    cartlight:{
        primary:mainColors.green2
    },
    loadingBackground: {
        primary:mainColors.black2
    },
    err:{
        primary:mainColors.red1
    }
}