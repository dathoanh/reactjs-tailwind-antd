import background from '../../images/login-background.jpg';
import { Form, Input, Button, Checkbox } from 'antd';

const LoginForm = () => {
  return (
    <div className="p-0 bg-cover bg-center relative z-10 after:absolute after:h-full after:w-full after:top-0 after:left-0 after:-z-10 after:bg-black/20 sm:p-12 lg:p-24 bg-[url('images/login-background.jpg')]">
      <div className="bg-white h-screen max-w-screen-xl mx-auto overflow-hidden rounded-xl drop-shadow-2xl md:flex lg:h-full">
        <div
          className="relative px-7 py-12 z-10 bg-no-repeat bg-bottom bg-gradient-to-br from-blue-700/70 to-blue-500 overflow-hidden block text-center w-full max-w-full basis-full
          
          before:w-36 before:h-36 before:rounded-xl before:rotate-45 before:bg-blue-100/30 before:-left-9 before:top-1/3 before:absolute before:-z-10 before:ring-offset-[60px] before:ring-offset-white/10 before:ring-0 before:animate-dzmove
          
          after:w-36 after:h-36 after:rounded-xl after:rotate-45 after:bg-blue-700/50 after:-right-8 after:-top-8 after:absolute after:-z-10 after:ring-offset-[60px] after:ring-offset-white/20 after:ring-0 after:animate-dzmove
          
          sm:p-12
          md:table md:basis-3/5 md:p-12 md:text-left 
          "
        >
          <a
            className="relative mb-5 no-underline block md:absolute md:mb-0 md:flex md:items-center"
            href="/"
          >
            <svg
              width={64}
              height={64}
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 inline"
            >
              <rect width={64} height={64} rx={18} fill="#F2F6FC"></rect>
              <path
                d="M33.9126 48.6459H16.7709C15.9917 48.6459 15.3542 48.0084 15.3542 47.2292V22.9334C15.3542 22.1542 15.9917 21.5167 16.7709 21.5167H17.6209C27.3959 21.5167 35.3292 29.45 35.3292 39.225V47.2292C35.2584 48.0084 34.6917 48.6459 33.9126 48.6459ZM18.1167 45.8834H32.4959V39.225C32.4959 31.15 26.1209 24.6334 18.1167 24.35V45.8834Z"
                fill="#216FED"
              ></path>
              <path
                d="M47.2291 48.6459H30.0874C29.3083 48.6459 28.6708 48.0084 28.6708 47.2292C28.6708 46.45 29.3083 45.8125 30.0874 45.8125H45.8833V33.0625C45.8833 24.9875 39.5083 18.4709 31.5041 18.1875V28.2459C31.5041 29.025 30.8666 29.6625 30.0874 29.6625C29.3083 29.6625 28.6708 29.025 28.6708 28.2459V16.7709C28.6708 15.9917 29.3083 15.3542 30.0874 15.3542H30.9374C40.7124 15.3542 48.6458 23.2875 48.6458 33.0625V47.3C48.6458 48.0084 48.0083 48.6459 47.2291 48.6459Z"
                fill="#216FED"
              ></path>
              <path
                d="M28.246 48.6458H22.296C21.5169 48.6458 20.8794 48.0083 20.8794 47.2292V37.95C20.8794 37.1709 21.5169 36.5334 22.296 36.5334H28.246C29.0252 36.5334 29.6627 37.1709 29.6627 37.95V47.2292C29.6627 48.0083 29.0252 48.6458 28.246 48.6458ZM23.7127 45.8833H26.8294V39.3667H23.7127V45.8833Z"
                fill="#216FED"
              ></path>
            </svg>
            <svg
              width={108}
              height={44}
              viewBox="0 0 108 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:inline"
            >
              <path
                d="M11.0979 43.58C7.81657 43.58 5.2559 43.0893 3.4159 42.108C1.60657 41.1573 0.701904 39.5933 0.701904 37.416C0.701904 36.2813 0.962571 35.2693 1.4839 34.38C2.0359 33.5213 2.87924 32.632 4.0139 31.712C3.4619 31.344 3.03257 30.8687 2.7259 30.286C2.4499 29.7033 2.3119 29.09 2.3119 28.446C2.3119 27.986 2.41924 27.5107 2.6339 27.02C2.87924 26.5293 3.3699 25.7013 4.1059 24.536C2.02057 23.0027 0.977904 20.764 0.977904 17.82C0.977904 15.0293 1.82124 12.9593 3.5079 11.61C5.22524 10.23 7.6019 9.53999 10.6379 9.53999C11.9259 9.53999 13.4746 9.73933 15.2839 10.138L22.6899 9.90799V14.83L19.2399 14.554C19.6386 15.198 19.8992 15.75 20.0219 16.21C20.1752 16.67 20.2519 17.2987 20.2519 18.096C20.2519 20.856 19.4699 22.834 17.9059 24.03C16.3419 25.1953 13.9652 25.778 10.7759 25.778C9.8559 25.778 9.15057 25.7167 8.6599 25.594C8.35324 26.33 8.1999 26.9587 8.1999 27.48C8.1999 28.124 8.50657 28.5227 9.1199 28.676C9.7639 28.7987 10.9446 28.8753 12.6619 28.906C15.0232 28.9673 16.8939 29.1513 18.2739 29.458C19.6846 29.7647 20.7732 30.3933 21.5399 31.344C22.3066 32.264 22.6899 33.6287 22.6899 35.438C22.6899 38.2287 21.7392 40.2833 19.8379 41.602C17.9366 42.9207 15.0232 43.58 11.0979 43.58ZM10.6839 21.086C13.0146 21.086 14.1799 19.9513 14.1799 17.682C14.1799 15.4433 13.0146 14.324 10.6839 14.324C8.32257 14.324 7.1419 15.4433 7.1419 17.682C7.1419 19.9513 8.32257 21.086 10.6839 21.086ZM11.5119 38.52C13.2599 38.52 14.5172 38.3207 15.2839 37.922C16.0812 37.5233 16.4799 36.91 16.4799 36.082C16.4799 35.3153 16.1886 34.8247 15.6059 34.61C15.0539 34.426 14.3946 34.3187 13.6279 34.288C12.8919 34.2573 12.4012 34.242 12.1559 34.242L8.0159 33.92C7.18791 34.748 6.7739 35.576 6.7739 36.404C6.7739 37.14 7.15724 37.6767 7.9239 38.014C8.72124 38.3513 9.91724 38.52 11.5119 38.52Z"
                fill="#ffffff"
              ></path>
              <path
                d="M26.4242 10H32.5422V12.438C35.1795 10.9047 37.6328 9.90799 39.9022 9.44799V15.658C37.6022 16.118 35.4708 16.6547 33.5082 17.268L32.5882 17.59V33H26.4242V10Z"
                fill="#ffffff"
              ></path>
              <path
                d="M43.5394 10H49.7034V33H43.5394V10ZM43.5394 0.845993H49.7034V7.056H43.5394V0.845993Z"
                fill="#ffffff"
              ></path>
              <path
                d="M62.591 33H58.267L52.609 10H58.681L62.867 27.756H63.925L68.111 10H74.183L66.087 42.66H60.061L62.591 33Z"
                fill="#ffffff"
              ></path>
              <path
                d="M82.9776 33.552C78.2242 33.552 75.8476 31.0373 75.8476 26.008C75.8476 23.616 76.4762 21.8987 77.7336 20.856C79.0216 19.7827 81.0762 19.154 83.8976 18.97L88.8196 18.602V17.176C88.8196 16.256 88.6049 15.612 88.1756 15.244C87.7769 14.876 87.0869 14.692 86.1056 14.692C85.0936 14.692 83.6982 14.738 81.9196 14.83C80.1409 14.8913 78.6536 14.968 77.4576 15.06L77.2736 10.782C80.5856 9.89266 83.7136 9.44799 86.6576 9.44799C89.6016 9.44799 91.7176 10.0613 93.0056 11.288C94.3242 12.5147 94.9836 14.4773 94.9836 17.176V26.744C95.0449 27.5107 95.1676 28.032 95.3516 28.308C95.5662 28.584 95.9496 28.7833 96.5016 28.906L96.3176 33.552C94.7229 33.552 93.4502 33.4447 92.4996 33.23C91.5796 33.0153 90.6596 32.586 89.7396 31.942C87.5009 33.0153 85.2469 33.552 82.9776 33.552ZM84.3116 28.538C85.4769 28.538 86.7496 28.354 88.1296 27.986L88.8196 27.802V22.88L84.6336 23.248C82.9162 23.4013 82.0576 24.3213 82.0576 26.008C82.0576 27.6947 82.8089 28.538 84.3116 28.538Z"
                fill="#ffffff"
              ></path>
              <path
                d="M100.584 25.364H107.208V33H100.584V25.364Z"
                fill="#ffffff"
              ></path>
            </svg>
          </a>
          <div className="pb-0 table-cell align-bottom">
            <h2 className="text-3xl text-white leading-snug font-bold mb-2 sm:text-4xl">
              Welcome To Griya
            </h2>
            <p className="text-sm text-white/80">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,
            </p>
            <ul className="justify-center flex mt-6 md:justify-start">
              <li className="mx-1 list-none md:mr-2 md:ml-0">
                <a
                  href="/"
                  className="h-11 w-11 text-white rounded-xl text-lg flex items-center justify-center text-center border-0 bg-white/20 transition-all ease-linear duration-500
                  hover:bg-white hover:text-black
                  "
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="mx-1 list-none md:mr-2 md:ml-0">
                <a
                  href="/"
                  className="h-11 w-11 text-white rounded-xl text-lg flex items-center justify-center  text-center border-0 bg-white/20 transition-all ease-linear duration-500
                  hover:bg-white hover:text-black
                  "
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="mx-1 list-none md:mr-2 md:ml-0">
                <a
                  href="/"
                  className="h-11 w-11 text-white rounded-xl text-lg flex items-center justify-center  text-center border-0 bg-white/20 transition-all ease-linear duration-500
                  hover:bg-white hover:text-black
                  "
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <div className="mt-4 text-white/80">
              <p className="text-sm leading-6">
                Copyright ?? Designed & Developed by DexignZone 2021
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-full basis-full flex justify-center items-center md:basis-2/5">
          <div className="p-10 flex-shrink-0 w-full max-w-full">
            <div className="px-2 py-8 md:px-0">
              <div className="mb-6">
                <h3 className="text-black font-bold text-3xl leading-relaxed">
                  Sign in
                </h3>
                <p className="text-base leading-loose">
                  Sign in by entering information below
                </p>
              </div>
              <form>
                <div className="mb-4">
                  <label className="mb-4 text-sm">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    className="bg-transparent block border-b-2 border-b-black rounded-none w-full text-sm leading-6 text-black h-11 "
                    placeholder="Type your email address"
                    defaultValue={'demo@example.com'}
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-4 text-sm">
                    <strong>Password</strong>
                  </label>
                  <input
                    type="password"
                    className="bg-transparent block border-b-2 border-b-black rounded-none w-full text-sm leading-6 text-black h-11 "
                    placeholder="Type your password"
                    defaultValue={'123456'}
                  />
                </div>
                <div className="flex items-center mb-4 mt-6">
                  <input
                    type="checkbox"
                    className="mr-3 relative -top-2"
                    id="checkbox_remember"
                  />
                  <label htmlFor="checkbox_remember" className="text-sm mb-4">
                    Remember my reference
                  </label>
                </div>
                <div className="text-center">
                  <button className="rounded-lg text-white bg-blue-600 block w-full leading-normal px-4 py-2">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="mt-2">
                <p className="">
                  Don't have an account?{' '}
                  <a href="/" className="no-underline text-blue-600">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
