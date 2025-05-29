'use client'

// const stats = [
//   {
//     label: "Posts and interactions shared by travelers worldwide.",
//     value: "44 million",
//   },
//   {
//     label: "Worth of travel decisions influenced by user insights.",
//     value: "$119 trillion",
//   },
//   {
//     label:
//       "New users joining our platform every year to shape the future of travel.",
//     value: "46,000",
//   },
// ];
const values = [
  {
    name: 'Be World-Class',
    description:
      'We strive for excellence in everything we build, from technology to community engagement. Every interaction should inspire and elevate the travel experience.',
  },
  {
    name: 'Share Everything You Know',
    description:
      'Knowledge is meant to be shared. By contributing honest insights and experiences, we create a platform where everyone benefits from reliable and diverse perspectives.',
  },
  {
    name: 'Always Learning',
    description:
      'The world is constantly evolving, and so are we. We embrace curiosity, feedback, and continuous improvement to enhance how people explore destinations.',
  },
  {
    name: 'Be Supportive',
    description:
      'Community matters. We foster an environment where users support one another, ensuring that travel becomes a more enriching and inclusive experience for everyone.',
  },
  {
    name: 'Take Responsibility',
    description:
      'Integrity is key. We encourage users to contribute responsibly, verify information, and help maintain the credibility of shared content.',
  },
  {
    name: 'Enjoy the Journey',
    description:
      "Travel is about experiences, not just destinations. Whether you're sharing memories or planning your next adventure, we believe in making every moment count.",
  },
]

export default function Index() {
  return (
    <div className="px-12">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 sm:pt-28 xs:pt-28 md:pt-28 lg:px-8 lg:pt-18">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-pretty text-5xl font-semibold tracking-tight text-[#103f66] sm:text-4xl xs:text-4xl">
                    Revolutionizing the Way People Explore Destinations
                  </h1>
                  <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-base xs:text-base lg:max-w-none">
                    We believe that every journey should be guided by authentic,
                    community-driven insights. Our platform empowers travelers
                    to share real experiences, connect with like-minded
                    explorers, and discover destinations with confidence.
                    Whether you’re looking for hidden gems, honest reviews, or
                    verified travel tips, we bring you reliable information that
                    reflects the true essence of every place.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 xs:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?q=80&w=2892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1598944999410-e93772fc48a5?q=80&w=2871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 xs:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none text-center flex flex-col items-center">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#103f66]">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="flex flex-col items-center">
                <p className="text-2xl text-gray-600 sm:text-lg xs:text-lg">
                  Our mission is to bridge the gap between travelers and
                  reliable information, ensuring that every journey is backed by
                  real experiences, not just marketing hype.
                </p>
                <p className="mt-10 max-w-xl text-base/7 sm:text-sm xs:text-sm text-gray-700">
                  By leveraging user-generated content, interactive scoring
                  systems, and community validation, we empower travelers to
                  make informed decisions about their destinations. Whether
                  you're exploring a new city or revisiting a favorite spot, we
                  make sure the information you rely on is accurate, relevant,
                  and trustworthy.
                </p>
              </div>
              {/* <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base/7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div> */}
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-12 xs:mt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 mb-24 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-[#103f66]">
              Our values
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 sm:text-lg xs:text-lg">
              Our values guide everything we do, ensuring that travelers and
              explorers can rely on real experiences, verified information, and
              meaningful connections.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:text-base xs:text-base sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  )
}
