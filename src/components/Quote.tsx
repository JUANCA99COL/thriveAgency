import DotPattern from './ui/dot-pattern-1'

export default function Quote() {
  return (
    <section className="container-px mx-auto mt-10 mb-10 max-w-7xl md:mt-20 md:mb-20">
      <div className="relative flex flex-col items-center border border-violet-500/40">
        <DotPattern width={5} height={5} className="fill-violet-500/30 md:fill-violet-500/40" />

        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-violet-500" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-violet-500" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-violet-500" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-violet-500" />

        <div className="relative z-20 mx-auto max-w-7xl rounded-[40px] py-6 md:p-10 xl:py-20">
          <p className="md:text-md text-xs text-violet-400 lg:text-lg xl:text-2xl">
            We believe
          </p>
          <div className="font-display text-[3rem] tracking-tighter text-white">
            <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              <h2 className="font-heading">"Design should be</h2>
              <p className="font-thin text-muted">easy to</p>
            </div>
            <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              <p className="font-thin text-muted">understand</p>
              <h2 className="font-heading">because</h2>
            </div>
            <div className="flex flex-wrap gap-1 md:gap-2 lg:gap-3 xl:gap-4">
              <p className="font-thin text-muted">simple ideas</p>
              <h2 className="font-heading">are quicker to</h2>
            </div>
            <h2 className="font-heading">grasp..."</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
