import { Button } from 'flowbite-react';

export default function CallToAction() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Want to Step into the World of E-commerce Excellence?
                </h2>
                <p className='text-gray-500 my-2'>
                    Explore My Stunning E-commerce Website Today!
                </p>
                <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://ecommerce-frontend-ten-theta.vercel.app/" target='_blank' rel='noopener noreferrer'>
                        Unlock the Power of NexGen🔓
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg?w=1800&t=st=1706801622~exp=1706802222~hmac=f7d1c0e5a4f22c9e748eb1c15483ad34354e8e22f18bec2b0a785aa78ae73ab4" />
            </div>
        </div>
    )
}