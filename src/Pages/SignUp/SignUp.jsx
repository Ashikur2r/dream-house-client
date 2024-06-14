import { Envelope, GoogleLogo, Lock } from 'phosphor-react'
import { Button, Card, Divider, Icon, Input, Label,Avatar  } from 'keep-react'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
    }
    return (
        <div  className='max-w-screen-sm mx-auto lg:px-12 md:px-8 px-5 py-12'>
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
                    <form onSubmit={handleSignUp} className="space-y-2">
                        <fieldset className="space-y-1">
                            <Label htmlFor="text">User Name*</Label>
                            <div className="relative pl-1">
                                <Input id="text" type="text" placeholder="Enter User Name" className="ps-11" />
                                <Icon>
                                    <Avatar size="sm" /></Icon>
                                
                            </div>
                        </fieldset>
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
                        <Button className="!mt-3 block w-full" size="xs" color="secondary" variant="">
                            <input  type="submit" value="Create An Account" />

                        </Button>

                    </form>
                </Card.Content>
            </Card>
        </div>
    );
};

export default SignUp;