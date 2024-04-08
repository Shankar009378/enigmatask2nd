import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-green-600 to-gray-900 rounded-lg text-white'>
                Enigma's
              </span>
              Task
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://my-portfolio-eta-seven-71.vercel.app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  My Portfolio
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Enigma's Task
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/Shankar009378'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://www.linkedin.com/in/shankar-kumar-nanda-04304a263/' target='_blank'
                  rel='noopener noreferrer'>Linkedin</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Enigma's Task"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.linkedin.com/in/shankar-kumar-nanda-04304a263/' icon={BsLinkedin} />
            <Footer.Icon href='https://www.instagram.com/0_shankar7?igsh=MmM4NnUyOWttNTNp' icon={BsInstagram} />
            <Footer.Icon href='https://twitter.com/shankarnanda26' icon={BsTwitter} />
            <Footer.Icon href='https://github.com/Shankar009378' icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
