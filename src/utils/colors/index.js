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
    grey3:'#EDEEF0',
    blue1:'#0066CB',

    
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
    },
    border:{
        primary:mainColors.grey2,
        secondary:mainColors.grey3
    },
    cartlight:{
        primary:mainColors.green2
    }
}