import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { ERROR_COLOR, MAIN_SECONDARY_YELLOW_COLOR, MAIN_PRIMARY_YELLOW_COLOR, WHITE_COLOR } from '../../../variables/variables';

export const SearchTextField = styled(TextField)({
  '&.MuiTextField-root': {
    width: '100%',
    transition: '0.2s linear',
    color: WHITE_COLOR,

    '&:hover': {
      '& .MuiInputBase-root': {
        '& input': {
          color: MAIN_PRIMARY_YELLOW_COLOR,
        },
        '&::before': {
          borderBottomColor: MAIN_PRIMARY_YELLOW_COLOR,
        },
        '&::after': {
          borderBottomColor: MAIN_PRIMARY_YELLOW_COLOR,
        },
      },
      '& .MuiInputLabel-root': {
        color: MAIN_PRIMARY_YELLOW_COLOR,
      },
    },

    '& .MuiInputBase-root.Mui-focused': {
      '& input': {
        paddingLeft: 15,
      },
    },

    '& .MuiInputBase-root': {
      transition: '0.3s linear',

      '& input': {
        paddingLeft: 15,
        color: WHITE_COLOR,

        '&.Mui-error': {
          color: ERROR_COLOR,
        },
      },

      '&::before': {
        borderBottomColor: WHITE_COLOR,
      },
      '&::after': {
        borderBottomColor: MAIN_PRIMARY_YELLOW_COLOR,
      },

      '&.Mui-error': {
        '&::before': {
          borderBottomColor: ERROR_COLOR,
        },
        '&::after': {
          borderBottomColor: ERROR_COLOR,
        },
        '& input': {
          color: ERROR_COLOR,
        },
      },
    },

    '& .MuiInputLabel-root': {
      color: WHITE_COLOR,
      '&.Mui-focused': {
        color: MAIN_SECONDARY_YELLOW_COLOR,
      },
      '&.Mui-error': {
        color: ERROR_COLOR,
      },
    },

    '& .MuiFormHelperText-root': {
      marginTop: 5,
      color: WHITE_COLOR,
    },
  },
}) as typeof TextField;
