const mainColors = {
    green1: '#0BCAD4',
    green2: '#EDFCFD',
    dark1: '#112340',
    dark2:'#495A75',
    grey1: '#7D8797',
    grey2:'#EEEEEE',
    grey3:'#EDEEF0',
};

export const colors = {
    primary:mainColors.green1,
    secondary:mainColors.dark1,
    white:'white',
    black:'black',
    text:{
        primary:mainColors.dark1,
        secondary:mainColors.grey1,
        menuInactive:mainColors.dark2,
        menuActive:mainColors.green1
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
        primary:mainColors.grey2
    },
    cartlight:{
        primary:mainColors.green2
    }
}