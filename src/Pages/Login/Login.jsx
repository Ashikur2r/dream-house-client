import { Envelope, GoogleLogo, Lock } from 'phosphor-react'
import { Button, Card, Divider, Icon, Input, Label } from 'keep-react'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
    const { logIn } = useContext(AuthContext)
    const navigate =useNavigate()
    const loaction =useLocation()
    const from = loaction.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)
        logIn(email, password)
        .then((result)=>{
            const user = result.user
                console.log(user)
                Swal.fire({
                    title: "Great!",
                    text: "You are successfully login",
                    icon: "success"
                  });
                navigate(from,{replace:true})
        })
        .catch((error) => {
            
        });
            
    }
    return (
        <div className='max-w-screen-sm mx-auto lg:px-12 md:px-8 px-5 py-12'>
            <Card className="max-w-lg">
                <Card.Content className="space-y-3">
                    <Card.Header>
                        <Card.Title>Create an account</Card.Title>
                        <Card.Description>If you don&apos;t have any account then just click here</Card.Description>
                    </Card.Header>
                    <div className="flex items-center justify-between gap-3">
                        <Button size="xs" variant="outline" color="secondary" className="w-full">
                            <GoogleLogo size={20} className="mr-1.5" />
                            Google
                        </Button>

                    </div>
                    <Divider>Or</Divider>
                    <form onSubmit={handleLogin} className="space-y-2">
                        <fieldset className="space-y-1">
                            <Label htmlFor="email">Email*</Label>
                            <div className="relative">
                                <Input id="email" type="email" placeholder="Enter email" className="ps-11" />
                                <Icon>
                                    <Envelope size={19} color="#AFBACA" />
                                </Icon>
                            </div>
                        </fieldset>
                        <fieldset className="space-y-1">
                            <Label htmlFor="password">Password*</Label>
                            <div className="relative">
                                <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
                                <Icon>
                                    <Lock size={19} color="#AFBACA" />
                                </Icon>
                            </div>
                        </fieldset>
                        <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="outline">
                            <input type="submit" value="Login" />

                        </Button>

                    </form>
                </Card.Content>
            </Card>
        </div>
    );
};

export default Login;