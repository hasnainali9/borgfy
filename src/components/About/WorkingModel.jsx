const models = [
  {
    id: 1,
    video: '/assets/about/videos/venture.mp4',
    poster: '/assets/about/videos/venturePoster.jpg',
    title: 'Venture Creation',
    desc: 'Co-building startups from concept to scalable success.'
  },
  {
    id: 2,
    video: '/assets/about/videos/technology.mp4',
    poster: '/assets/about/videos/technologyPoster.jpg',
    title: 'Technology Partnering',
    desc: 'Delivering SaaS, AI platforms, and mobile apps for other founders.'
  },
  {
    id: 3,
    video: '/assets/about/videos/advisory.mp4',
    poster: '/assets/about/videos/advisoryPoster.jpg',
    title: 'Advisory & Growth',
    desc: 'Guiding ventures with branding, strategy, and market execution to ensure long-term impact.'
  }
]

const WorkingModel = () => {
  return (
    <div className='custom-container py-10 md:pb-16'>
      <h2 className='font-normal text-3xl  md:text-[52px] md:leading-[100%] text-[#0F1412] text-center'>
        Working <span className='font-[Times_New_Roman] italic'>Models</span>
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center w-full h-full mt-[50px]'>
        {models.map((model, index) => (
          <div
            key={model.id}
            className={`flex flex-col ${
              model.id === 2 ? 'sm:flex-col-reverse' : ''
            } ${index === models.length - 1 && 'sm:col-span-2 lg:col-span-1'}`}
          >
            <video
              src={model.video}
              muted
              loop
              autoPlay
              playsInline
              preload='auto'
              className={`w-full object-fill h-[222px] ${
                index === models.length - 1 && 'sm:h-[300px] lg:h-[222px]'
              }`}
            />

            <div className='bg-gradient-to-br from-[#0049DA] to-[#011F5C] text-white h-[222px] w-full font-normal flex flex-col items-center justify-center gap-[16px]'>
              <h3 className='text-[32px] leading-[40px] tracking-[-1px] text-center'>
                {model.title}
              </h3>
              <p className='text-[#EAEAEA] text-base leading-[24px] max-w-[230px] sm:max-w-full lg:max-w-[230px] text-center'>
                {model.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default WorkingModel
