import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getUser, login } from '../../State/Auth/Action';

const LoginForm = () => {
    const jwt=localStorage.getItem("jwt");
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { auth } = useSelector((store) => store);

    useEffect(()=>{
      if(jwt){
          dispatch(getUser(jwt))
      }
    },[jwt,auth.jwt])

    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget)

        const userData = {
          email: data.get("email"),
          password: data.get("password"),
        }
        dispatch(login(userData))
        console.log("userData : ",userData);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <TextField
                required
                id='email'
                name='email'
                label='Email'
                fullWidth
                autoComplete='given-name'
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                required
                id='password'
                name='password'
                label='Password'
                fullWidth
                autoComplete='password'
                />
            </Grid>

            <Grid item xs={12}>
                <Button className='bg-black w-full'
                type='submit'
                variant='contained'
                size='large'
                sx={{padding:".8rem 0", bgcolor:"#000000"}}>
                    Login
                </Button>
            </Grid>
        </Grid>
      </form>

      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
            <p>if you don't have account.</p>
            <Button onClick={()=>navigate("/register")}
            size='small' className='ml-5'>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
