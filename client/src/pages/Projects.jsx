// import CallToAction from '../components/CallToAction';

// export default function Projects() {
//   return (
//     <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
//       <h1 className='text-3xl font-semibold'>Projects</h1>
//       <p className='text-md text-gray-500'>Build this fun and engaging project while learning Full Stack Development (MERN)!</p>
//       <CallToAction />
//     </div>
//   )
// }
// import CallToAction from '../components/CallToAction';

// export default function Projects() {
//   return (
//     <div className='min-h-screen bg-amber-100 flex justify-center items-center'>
//       <div className='max-w-4xl mx-auto p-8'>
//         <h1 className='text-4xl font-bold text-center mb-6'>Explore My Projects</h1>
//         <p className='text-lg text-gray-700 text-center mb-8'>
//           Discover our exciting projects and learn Full Stack Development (MERN) in an engaging way!
//         </p>
//         <CallToAction />
//       </div>
//     </div>
//   )
// }
import { Button } from 'flowbite-react';
import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='max-w-4xl mx-auto p-8'>
        <h1 className='text-4xl font-bold text-center mb-6'>Explore My Projects</h1>
        <p className='text-lg text-gray-700 text-center mb-8'>
          Discover our exciting projects and learn Full Stack Development (MERN) in an engaging way!
        </p>
        <CallToAction />

        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center mt-8'>
          <div className="p-7 flex-1">
            <img src="https://img.freepik.com/free-photo/side-view-cook-making-delicious-pasta_23-2150690631.jpg?size=626&ext=jpg&ga=GA1.1.1963561478.1705991390&semt=sph" alt="Project Image" />
          </div>
          <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
              Discover🌟the Flavorful World of Geritch Restaurant🍽️
            </h2>
            <p className='text-gray-500 my-2'>
              Explore the Art of Fine Dining at Geritch Restaurant!.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
              <a href="https://gericht-restaurant-512114.netlify.app" target='_blank' rel='noopener noreferrer'>
                Click here to Taste the Magic✨
              </a>
            </Button>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center mt-8'>
          <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
              Ignite your fitness journey with FitFusion! 🏋️‍♂️💥
            </h2>
            <p className='text-gray-500 my-2'>
              Discover🌟the realms of fitness connectivity and interaction!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
              <a href="https://fitness-club-weld.vercel.app" target='_blank' rel='noopener noreferrer'>
                Elevate your fitness experience! 💪🚀
              </a>
            </Button>
          </div>
          <div className="p-7 flex-1">
            <img src="https://img.freepik.com/free-photo/3d-gym-equipment_23-2151114137.jpg?size=626&ext=jpg&ga=GA1.1.1963561478.1705991390&semt=sph" alt="Project Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
