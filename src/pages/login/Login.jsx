import './login.scss'
import { Box, Button, TextField, Container } from '@mui/material'
import { useForm } from 'react-hook-form'

export default function Login() {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit=(data)=>console.log(data)

  return (
    <div className='login'>
        <Container maxWidth='xs'>
          <Box mb={3}>
           <h1 className='corpName'>이태원정형외과의원</h1>
           </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={3}>
            <TextField 
                variant='outlined' 
                label='아이디' 
                fullWidth 
                autoComplete='아이디'
                autoFocus
                {...register("아이디", { required: "아이디를 입력해주세요" })}
                error={!!errors?.아이디}
                helperText={errors?.아이디 ? errors.아이디.message : null}
              />
          </Box>
          <Box mb={3}>
              <TextField 
                variant='outlined' 
                label='비밀번호' 
                fullWidth 
                autoComplete='비밀번호'
                autoFocus
                {...register("비밀번호", { required: "비밀번호를 입력해주세요" })}
                error={!!errors?.비밀번호}
                helperText={errors?.비밀번호 ? errors.비밀번호.message : null}
              />
          </Box>
            <Button
              type='submit'
              variant="contained"
              fullWidth
            >
              로그인
            </Button>
          </form>
        </Container>
    </div>
  )
}
