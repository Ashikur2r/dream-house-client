
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {  Card} from 'keep-react'

import { Link } from 'react-router-dom';




const Apartment = () => {

    const { data: apartments, error, isLoading } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/apartments')
            return res.data
        }
    })
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading data</div>;



    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 align-middle gap-3 max-w-screen-lg mx-auto md:px-5 md:py-5 py-5 px-5'>

            {apartments.map((card) => (
                <div key={card.id} className="card">

                    <Card className='max-w-none '>
                        <Card.Header>
                            <img className='h-64 w-fit' src={card.image} alt="" />
                        </Card.Header>
                        <Card.Content className="space-y-3">
                            <Card.Title>{card.title}</Card.Title>
                            <Link className='text-purple-500' to={'/detail'}>Learn More</Link>
                        </Card.Content>
                    </Card>

                </div>
            ))}

        </div>
    );
};

export default Apartment;
