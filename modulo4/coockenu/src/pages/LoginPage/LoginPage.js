import React from "react";
import logo from '../../assets/logo.png'
import {ScreenContainer,LogoImage, InputsContainer} from './styled'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const LoginPage = ()=>{

    

    return(

        
        <ScreenContainer>
   
            <LogoImage src={logo}></LogoImage>
            <InputsContainer>
                    <TextField
                        name={"email"}
                        value={''}
                        onChange={''}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={''}
                        onChange={''}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                </InputsContainer>
                <Button

                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                >
                    Fazer Login
                </Button>

        </ScreenContainer>
    )
}

export default LoginPage