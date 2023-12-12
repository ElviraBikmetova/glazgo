import { ITheme } from "../modules/styled";

export const baseTheme: ITheme = {
    colors: {
        primary: '#2255EA',
        inactive: 'rgba(34, 85, 234, 0.50)',
        black: '#121212',
        white: '#fff',
        gray:  '#BEBEBE',
        lightGray: '#F0F0F0',
        error: '#EB5757'
    },

    // media: {},

    // in px
    sizes: {
        container: {width: 360},
    },

    // in ms
    // durations: {},

    // z-index
    order: {
        header: 10,
        burger: 11
    }

}
