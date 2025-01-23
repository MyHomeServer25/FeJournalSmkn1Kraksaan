import "./App.css";

function App() {
  return (
    <div className="font-roboto text-base text-slate-900 dark:text-white dark:bg-slate-900">
      <div id="preloader">
        <div id="status">
          <div className="logo">
            <img
              src="assets/images/logo-icon-64.png"
              className="d-block mx-auto animate-[spin_10s_linear_infinite]"
              alt=""
            />
          </div>
          <div className="justify-content-center">
            <div className="text-center">
              <h4 className="mb-0 mt-2 text-lg font-semibold">Appever</h4>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar" id="navbar">
        <div className="container relative flex flex-wrap items-center justify-between">
          <a className="navbar-brand md:me-8" href="index.html">
            <img
              src="assets/images/logo-dark.png"
              className="h-5 inline-block dark:hidden"
              alt=""
            />
            <img
              src="assets/images/logo-light.png"
              className="h-5 hidden dark:inline-block"
              alt=""
            />
          </a>

          <div className="nav-icons flex items-center lg_992:order-2 md:ms-6">
            <ul className="list-none menu-social mb-0">
              <li className="inline">
                <a
                  href="#"
                  className="size-8 inline-flex items-center justify-center rounded-full align-middle bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white"
                >
                  <i data-feather="user" className="size-4"></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href="#"
                  className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-full bg-red-500 text-white uppercase"
                >
                  Signup
                </a>
              </li>
            </ul>

            <button
              data-collapse="menu-collapse"
              type="button"
              className="collapse-btn inline-flex items-center ms-2 text-slate-900 dark:text-white lg_992:hidden"
              aria-controls="menu-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Navigation Menu</span>
              <i className="mdi mdi-menu text-[24px]"></i>
            </button>
          </div>

          <div
            className="navigation lg_992:order-1 lg_992:flex hidden ms-auto"
            id="menu-collapse"
          >
            <ul className="navbar-nav" id="navbar-navlist">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#screenshot">
                  Application
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faqs">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#reviews">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        className="relative overflow-hidden md:py-36 py-24 bg-slate-50/50 dark:bg-slate-800/20 bg-[url('../../assets/images/bg1.html')] bg-no-repeat bg-center bg-cover"
        id="home"
      >
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
            <div className="md:me-6">
              <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
                App Showcase
              </h6>
              <h4 className="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">
                Creative way to Showcase your app
              </h4>
              <p className="text-slate-400 text-lg max-w-xl">
                Gain valuable insights into user behavior and drive
                data-informed decision-making with our revolutionary platform.
              </p>

              <div className="mt-6">
                <a href="#">
                  <img
                    src="assets/images/app.png"
                    className="h-12 inline-block m-1"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="assets/images/play.png"
                    className="h-12 inline-block m-1"
                    alt=""
                  />
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src="assets/images/phone/1.png"
                className="mx-auto w-80 rotate-12 relative z-2"
                alt=""
              />
              <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-red-500/20 via-red-500/70 from-red-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-red-500/10 rounded-full"></div>

              <div className="overflow-hidden after:content-[''] after:absolute after:size-16 after:bg-red-500/20 after:top-0 after:end-6 after:z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16" id="features">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
              Features
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Discover Powerful Features
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            <div className="p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl">
              <div className="size-16 bg-red-500/5 text-red-500 rounded-2xl flex align-middle justify-center items-center shadow-sm">
                <i data-feather="maximize" className="size-5"></i>
              </div>

              <div className="content mt-7">
                <a
                  href="#"
                  className="text-lg hover:text-red-500 dark:text-white dark:hover:text-red-500 transition-all duration-500 ease-in-out font-semibold"
                >
                  Fully functional
                </a>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>

                <div className="mt-3">
                  <a
                    href="#"
                    className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500"
                  >
                    Read More <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl">
              <div className="size-16 bg-red-500/5 text-red-500 rounded-2xl flex align-middle justify-center items-center shadow-sm">
                <i data-feather="pie-chart" className="size-5"></i>
              </div>

              <div className="content mt-7">
                <a
                  href="#"
                  className="text-lg hover:text-red-500 dark:text-white dark:hover:text-red-500 transition-all duration-500 ease-in-out font-semibold"
                >
                  Secure Data
                </a>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>

                <div className="mt-3">
                  <a
                    href="#"
                    className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500"
                  >
                    Read More <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl">
              <div className="size-16 bg-red-500/5 text-red-500 rounded-2xl flex align-middle justify-center items-center shadow-sm">
                <i data-feather="navigation-2" className="size-5"></i>
              </div>

              <div className="content mt-7">
                <a
                  href="#"
                  className="text-lg hover:text-red-500 dark:text-white dark:hover:text-red-500 transition-all duration-500 ease-in-out font-semibold"
                >
                  Track Location
                </a>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>

                <div className="mt-3">
                  <a
                    href="#"
                    className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500"
                  >
                    Read More <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl">
              <div className="size-16 bg-red-500/5 text-red-500 rounded-2xl flex align-middle justify-center items-center shadow-sm">
                <i data-feather="database" className="size-5"></i>
              </div>

              <div className="content mt-7">
                <a
                  href="#"
                  className="text-lg hover:text-red-500 dark:text-white dark:hover:text-red-500 transition-all duration-500 ease-in-out font-semibold"
                >
                  Data Analyse
                </a>
                <p className="text-slate-400 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>

                <div className="mt-3">
                  <a
                    href="#"
                    className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500"
                  >
                    Read More <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20">
                <img src="assets/images/phone/half-1.png" alt="" />
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-10">
                <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
                  Customizable
                </h6>
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
                  Work Faster With <br /> Powerful Tools
                </h4>
                <p className="text-slate-400 max-w-xl">
                  Unleash the power of our platform with a multitude of powerful
                  features, empowering you to achieve your goals.
                </p>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  <div className="group flex relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-slate-50/50 dark:bg-slate-800/20 hover:bg-red-500 dark:hover:bg-red-500 duration-500">
                    <span className="text-red-500 group-hover:text-white text-5xl font-semibold duration-500">
                      <i data-feather="shield" className="size-8 mt-2"></i>
                    </span>
                    <div className="flex-1 ms-3">
                      <h5 className="group-hover:text-white text-lg font-semibold duration-500">
                        Enhance Security
                      </h5>
                      <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-2">
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                    </div>
                    <div className="absolute start-1 top-5 text-slate-900/[0.02] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.1] duration-500">
                      <i data-feather="shield" className="size-24"></i>
                    </div>
                  </div>

                  <div className="group flex relative overflow-hidden p-6 rounded-md shadow dark:shadow-gray-800 bg-slate-50/50 dark:bg-slate-800/20 hover:bg-red-500 dark:hover:bg-red-500 duration-500">
                    <span className="text-red-500 group-hover:text-white text-5xl font-semibold duration-500">
                      <i data-feather="aperture" className="size-8 mt-2"></i>
                    </span>
                    <div className="flex-1 ms-3">
                      <h5 className="group-hover:text-white text-lg font-semibold duration-500">
                        High Performance
                      </h5>
                      <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-2">
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                    </div>
                    <div className="absolute start-1 top-5 text-slate-900/[0.02] dark:text-white/[0.03] text-8xl group-hover:text-white/[0.1] duration-500">
                      <i data-feather="aperture" className="size-24"></i>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#"
                    className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium"
                  >
                    Learn More{" "}
                    <i className="mdi mdi-arrow-right align-middle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
              <div className="pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20">
                <img src="assets/images/phone/half-2.png" alt="" />
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
              <div className="lg:me-10">
                <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
                  Elegant Design
                </h6>
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
                  Share your photos with <br /> friends easily
                </h4>
                <p className="text-slate-400 max-w-xl">
                  Unleash the power of our platform with a multitude of powerful
                  features, empowering you to achieve your goals.
                </p>

                <ul className="list-none text-slate-400 mt-6">
                  <li className="mb-1 flex">
                    <i className="mdi mdi-check text-red-500 text-xl me-2"></i>{" "}
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="mb-1 flex">
                    <i className="mdi mdi-check text-red-500 text-xl me-2"></i>{" "}
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="mb-1 flex">
                    <i className="mdi mdi-check text-red-500 text-xl me-2"></i>{" "}
                    Create your own skin to match your brand
                  </li>
                </ul>

                <div className="mt-6">
                  <a
                    href="#"
                    className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium"
                  >
                    Learn More{" "}
                    <i className="mdi mdi-arrow-right align-middle"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="screenshot"
      >
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
              Screenshots
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              Simple & Beautiful Interface
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-6 relative">
            <div className="tiny-four-item">
              <div className="tiny-slide">
                <a href="assets/images/phone/1.png" className="lightbox">
                  <img src="assets/images/phone/1.png" alt="" />
                </a>
              </div>

              <div className="tiny-slide">
                <a href="assets/images/phone/2.png" className="lightbox">
                  <img src="assets/images/phone/2.png" alt="" />
                </a>
              </div>

              <div className="tiny-slide">
                <a href="assets/images/phone/3.png" className="lightbox">
                  <img src="assets/images/phone/3.png" alt="" />
                </a>
              </div>

              <div className="tiny-slide">
                <a href="assets/images/phone/4.png" className="lightbox">
                  <img src="assets/images/phone/4.png" alt="" />
                </a>
              </div>

              <div className="tiny-slide">
                <a href="assets/images/phone/5.png" className="lightbox">
                  <img src="assets/images/phone/5.png" alt="" />
                </a>
              </div>

              <div className="tiny-slide">
                <a href="assets/images/phone/6.png" className="lightbox">
                  <img src="assets/images/phone/6.png" alt="" />
                </a>
              </div>

              <div className="tiny-slide">
                <a href="assets/images/phone/7.png" className="lightbox">
                  <img src="assets/images/phone/7.png" alt="" />
                </a>
              </div>

              <div className="tiny-slide">
                <a href="assets/images/phone/8.png" className="lightbox">
                  <img src="assets/images/phone/8.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
            <div className="relative order-1 md:order-2">
              <div className="relative">
                <img
                  src="assets/images/phone/3.png"
                  className="mx-auto md:max-w-xs lg:max-w-sm"
                  alt=""
                />

                <div className="absolute top-24 md:end-14 -end-2 text-center">
                  <a
                    href="#!"
                    data-type="youtube"
                    data-id="S_CGed6E610"
                    className="lightbox size-20 rounded-full shadow-md dark:shadow-gyay-700 inline-flex items-center justify-center text-white bg-red-500"
                  >
                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                  </a>
                </div>
              </div>
              <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr to-red-500/20 via-red-500/70 from-red-500 bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-red-500/10 rounded-full"></div>

              <div className="absolute bottom-28 md:start-0 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-52 m-3">
                <div className="flex items-center">
                  <div className="flex items-center justify-center size-[65px] bg-red-500/5 text-red-500 text-center rounded-full me-3">
                    <i data-feather="download" className="size-6"></i>
                  </div>
                  <div className="flex-1">
                    <h6 className="text-slate-400">Total Users</h6>
                    <p className="text-xl font-bold">
                      <span className="counter-value" data-target="45485">
                        39548
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:me-8 order-2 md:order-1">
              <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
                FAQs
              </h6>
              <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
                Have Questions? Look Here
              </h4>
              <p className="text-slate-400 max-w-xl mx-auto">
                Unleash the power of our platform with a multitude of powerful
                features, empowering you to achieve your goals.
              </p>

              <div
                id="accordion-collapseone"
                data-accordion="collapse"
                className="mt-8"
              >
                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden">
                  <h2
                    className="font-semibold"
                    id="accordion-collapse-heading-1"
                  >
                    <button
                      type="button"
                      className="flex justify-between items-center p-5 w-full font-medium text-start"
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-expanded="true"
                      aria-controls="accordion-collapse-body-1"
                    >
                      <span>How does it work ?</span>
                      <svg
                        data-accordion-icon
                        className="size-4 rotate-180 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-1"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                  <h2
                    className="text-lg font-semibold"
                    id="accordion-collapse-heading-2"
                  >
                    <button
                      type="button"
                      className="flex justify-between items-center p-5 w-full font-medium text-start"
                      data-accordion-target="#accordion-collapse-body-2"
                      aria-expanded="false"
                      aria-controls="accordion-collapse-body-2"
                    >
                      <span>Do I need a designer to use Appever ?</span>
                      <svg
                        data-accordion-icon
                        className="size-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-2"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                  <h2
                    className="text-lg font-semibold"
                    id="accordion-collapse-heading-3"
                  >
                    <button
                      type="button"
                      className="flex justify-between items-center p-5 w-full font-medium text-start"
                      data-accordion-target="#accordion-collapse-body-3"
                      aria-expanded="false"
                      aria-controls="accordion-collapse-body-3"
                    >
                      <span>What do I need to do to start selling ?</span>
                      <svg
                        data-accordion-icon
                        className="size-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-3"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-3"
                  >
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4">
                  <h2
                    className="text-lg font-semibold"
                    id="accordion-collapse-heading-4"
                  >
                    <button
                      type="button"
                      className="flex justify-between items-center p-5 w-full font-medium text-start"
                      data-accordion-target="#accordion-collapse-body-4"
                      aria-expanded="false"
                      aria-controls="accordion-collapse-body-4"
                    >
                      <span>What happens when I receive an order ?</span>
                      <svg
                        data-accordion-icon
                        className="size-4 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-4"
                    className="hidden"
                    aria-labelledby="accordion-collapse-heading-4"
                  >
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium"
                >
                  Find Out More <i className="mdi mdi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="download"
      >
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20">
                <img src="assets/images/phone/half-3.png" alt="" />
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6">
              <div className="lg:ms-10">
                <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
                  Mobile Apps
                </h6>
                <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
                  Available for your <br /> Smartphones
                </h4>
                <p className="text-slate-400 max-w-xl mb-0">
                  Unleash the power of our platform with a multitude of powerful
                  features, empowering you to achieve your goals.
                </p>
                <div className="my-6">
                  <a href="#">
                    <img
                      src="assets/images/app.png"
                      className="h-12 inline-block m-1"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/play.png"
                      className="h-12 inline-block m-1"
                      alt=""
                    />
                  </a>
                </div>

                <div className="inline-block">
                  <div className="pt-4 flex items-center border-t border-gray-100 dark:border-gray-800">
                    <i
                      data-feather="smartphone"
                      className="me-2 text-red-500 size-10"
                    ></i>
                    <div className="content">
                      <h6 className="text-base font-medium">
                        Install app now on your cellphones
                      </h6>
                      <a
                        href="#"
                        className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium"
                      >
                        Install Now <i className="mdi mdi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16" id="reviews">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
              Reviews
            </h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
              10k+ Customers Trust Us
            </h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful
              features, empowering you to achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-6">
            <div className="tiny-three-item">
              <div className="tiny-slide text-center">
                <div className="cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                    <p className="text-slate-400">
                      " It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. "
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <img
                      src="assets/images/client/01.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                    />
                    <h6 className="mt-2 font-semibold">Calvin Carlo</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                    <p className="text-slate-400">
                      " The most well-known dummy text is the 'Lorem Ipsum',
                      which is said to have originated in the 16th century. "
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <img
                      src="assets/images/client/02.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                    />
                    <h6 className="mt-2 font-semibold">Christa Smith</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                    <p className="text-slate-400">
                      " One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others. "
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <img
                      src="assets/images/client/03.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                    />
                    <h6 className="mt-2 font-semibold">Jemina CLone</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                    <p className="text-slate-400">
                      " Thus, Lorem Ipsum has only limited suitability as a
                      visual filler for German texts. "
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <img
                      src="assets/images/client/04.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                    />
                    <h6 className="mt-2 font-semibold">Smith Vodka</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                    <p className="text-slate-400">
                      " There is now an abundance of readable dummy texts. These
                      are usually used when a text is required. "
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <img
                      src="assets/images/client/05.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                    />
                    <h6 className="mt-2 font-semibold">Cristino Murfi</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>

              <div className="tiny-slide text-center">
                <div className="cursor-e-resize">
                  <div className="content relative rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                    <i className="mdi mdi-format-quote-open mdi-48px text-red-500"></i>
                    <p className="text-slate-400">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero. "
                    </p>
                    <ul className="list-none mb-0 text-amber-400 mt-3">
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                      <li className="inline">
                        <i className="mdi mdi-star"></i>
                      </li>
                    </ul>
                  </div>

                  <div className="text-center mt-5">
                    <img
                      src="assets/images/client/06.jpg"
                      className="size-14 rounded-full shadow-md mx-auto"
                      alt=""
                    />
                    <h6 className="mt-2 font-semibold">Cristino Murfi</h6>
                    <span className="text-slate-400 text-sm">Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20"
        id="contact"
      >
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src="assets/images/contact.svg" alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">
                    Contact Us
                  </h6>
                  <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
                    Get in touch !
                  </h4>

                  <form
                    method="post"
                    name="myForm"
                    id="myForm"
                    onsubmit="return validateForm()"
                  >
                    <p className="mb-0" id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <div className="grid lg:grid-cols-12 gap-3">
                      <div className="lg:col-span-6">
                        <div className="text-start">
                          <label for="name" className="font-medium">
                            Your Name:
                          </label>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-red-500 dark:border-gray-800 dark:focus:border-red-500 focus:ring-0"
                            placeholder="Name :"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-6">
                        <div className="text-start">
                          <label for="email" className="font-medium">
                            Your Email:
                          </label>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-red-500 dark:border-gray-800 dark:focus:border-red-500 focus:ring-0"
                            placeholder="Email :"
                          />
                        </div>
                      </div>
                      <div className="lg:col-span-12">
                        <div className="text-start">
                          <label for="subject" className="font-medium">
                            Your Question:
                          </label>
                          <input
                            name="subject"
                            id="subject"
                            className="form-input mt-1 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-red-500 dark:border-gray-800 dark:focus:border-red-500 focus:ring-0"
                            placeholder="Subject :"
                          />
                        </div>
                      </div>

                      <div className="lg:col-span-12">
                        <div className="text-start">
                          <label for="comments" className="font-medium">
                            Your Comment:
                          </label>
                          <textarea
                            name="comments"
                            id="comments"
                            className="form-input mt-1 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-red-500 dark:border-gray-800 dark:focus:border-red-500 focus:ring-0"
                            placeholder="Message :"
                          ></textarea>
                        </div>
                      </div>

                      <div className="lg:col-span-12">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="py-2 px-5 tracking-wider inline-flex items-center justify-center font-medium rounded bg-red-500 text-white"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container relative">
          <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
            <div className="mx-auto py-4">
              <img
                src="assets/images/client/amazon.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/google.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/lenovo.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/paypal.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/shopify.svg"
                className="h-6"
                alt=""
              />
            </div>

            <div className="mx-auto py-4">
              <img
                src="assets/images/client/spotify.svg"
                className="h-6"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-slate-800 dark:bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-12 items-center">
            <div className="md:col-span-3">
              <a href="#" className="logo-footer">
                <img
                  src="assets/images/logo-light.png"
                  className="md:ms-0 mx-auto"
                  alt=""
                />
              </a>
            </div>

            <div className="md:col-span-5 md:mt-0 mt-8">
              <div className="text-center">
                <p className="text-gray-400">
                  © <script>document.write(new Date().getFullYear())</script>{" "}
                  Appever. Design with{" "}
                  <i className="mdi mdi-heart text-red-700"></i> by{" "}
                  <a
                    href="https://shreethemes.in/"
                    target="_blank"
                    className="text-reset"
                  >
                    Shreethemes
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="md:col-span-4 md:mt-0 mt-8">
              <ul className="list-none foot-icon ltr:md:text-right rtl:md:text-left text-center">
                <li className="inline">
                  <a
                    href="https://1.envato.market/appever"
                    target="_blank"
                    className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"
                  >
                    <i
                      data-feather="shopping-cart"
                      className="h-4 w-4 align-middle"
                      title="Buy Now"
                    ></i>
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://dribbble.com/shreethemes"
                    target="_blank"
                    className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"
                  >
                    <i
                      data-feather="dribbble"
                      className="h-4 w-4 align-middle"
                      title="dribbble"
                    ></i>
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="http://linkedin.com/company/shreethemes"
                    target="_blank"
                    className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"
                  >
                    <i
                      data-feather="linkedin"
                      className="h-4 w-4 align-middle"
                      title="Linkedin"
                    ></i>
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.facebook.com/shreethemes"
                    target="_blank"
                    className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"
                  >
                    <i
                      data-feather="facebook"
                      className="h-4 w-4 align-middle"
                      title="facebook"
                    ></i>
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://www.instagram.com/shreethemes/"
                    target="_blank"
                    className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"
                  >
                    <i
                      data-feather="instagram"
                      className="h-4 w-4 align-middle"
                      title="instagram"
                    ></i>
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="https://x.com/shreethemes"
                    target="_blank"
                    className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"
                  >
                    <i
                      data-feather="twitter"
                      className="h-4 w-4 align-middle"
                      title="twitter"
                    ></i>
                  </a>
                </li>
                <li className="inline">
                  <a
                    href="mailto:support@shreethemes.in"
                    className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-700 hover:border-red-500 rounded-md text-slate-300 hover:text-white hover:bg-red-500"
                  >
                    <i
                      data-feather="mail"
                      className="h-4 w-4 align-middle"
                      title="email"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        onclick="topFunction()"
        id="back-to-top"
        className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-red-500 text-white leading-9"
      >
        <i className="mdi mdi-arrow-up"></i>
      </a>

      <div className="fixed top-1/4 -right-2 z-3">
        <span className="relative inline-block rotate-90">
          <input
            type="checkbox"
            className="checkbox opacity-0 absolute"
            id="chk"
          />
          <label
            className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
            for="chk"
          >
            <i data-feather="moon" className="size-4 text-yellow-500"></i>
            <i data-feather="sun" className="size-4 text-yellow-500"></i>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
          </label>
        </span>
      </div>

      <div className="fixed top-1/3 -right-3 z-50">
        <a href="#" id="switchRtl">
          <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold rtl:block ltr:hidden">
            LTR
          </span>
          <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">
            RTL
          </span>
        </a>
      </div>
    </div>
  );
}

export default App;
