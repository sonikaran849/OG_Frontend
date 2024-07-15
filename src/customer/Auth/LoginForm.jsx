import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget)

        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
        }

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