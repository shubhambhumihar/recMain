import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useDispatch, useSelector } from "react-redux";
const links = [
  { name: "Food Info", href: "#food" },
  { name: "Maintainance", href: "#maintain" },
  { name: "Our values", href: "#" },
  { name: "Meet our Team", href: "#team" },
];

export default function HostelInfo({ totalRooms }) {
  const [countOn, setCounterOn] = useState(false);
  const stats = [
    { name: "Total Rooms", value: totalRooms },
    { name: "Total Students", value: "300" },
    { name: "Total staffs", value: "40" },
    { name: "Total mess", value: "2" },
  ];

  return (
    <div className="relative isolate overflow-hidden bg-fixed info  bg-gray-900 py-24 sm:py-32">
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
      >
        <path
          fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="10724532-9d81-43d2-bb94-866e98dd6e42"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1097 845"
        aria-hidden="true"
        className="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
      >
        <path
          fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
          fillOpacity=".2"
          d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
        />
        <defs>
          <linearGradient
            id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
            x1="1097.04"
            x2="-141.165"
            y1=".22"
            y2="363.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#776FFF" />
            <stop offset={1} stopColor="#FF4694" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">
            Grow <span className="text-[#654E92]">with us</span>
          </h2>
          <h6 className="mt-6 text-lg leading-8 text-gray-300">
            Efficient and Comfortable Living: Our Hostel Management Solutions
            The Ultimate Hostel Experience: Let Us Manage Your Stay
          </h6>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="flex justify-center items-center flex-col-reverse"
              >
                <dt className="text-base leading-7 text-white-100">
                  {stat.name}
                </dt>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <dd className="text-5xl flex justify-center font-bold leading-9 tracking-tight text-orange-800">
                    {countOn && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2}
                        delay={0}
                      />
                    )}
                    +{/* {stat.value} */}
                  </dd>
                </ScrollTrigger>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
