export default function ProjectSherwood() {
  return (
    <div className="ml-8 w-11/12 sm:ml-0 sm:w-1/3 box-border border-large border-neutral-600 border-double p-4 bg-neutral-700 bg-opacity-30 shadow-md shadow-neutral-500 border-opacity-20">
      <h1 className="font-bold text-xl sm:text-3xl">Project Sherwood</h1>
      <p className="mt-10 sm:mt-4">
        Electric forest has always been one of the highlights of my year. Each
        year I attend with close friends and have a time of my life. In honor of
        this amazing experience I used my skills as a software developer to
        create a music venue in VRChat dedicated to the festival that can be
        experienced by both PCVR and Android users. It is complet with sound
        reactive lights, ferris wheel, hot air balloon, fx, and the feeling of
        being at Electric Forest in the comfort of your own home.
      </p>
      <a
        className="text-2xl text-primary"
        target="_blank"
        href="https://vrchat.com/home/world/wrld_4896a935-4b8c-4c43-9ac8-824457d63960"
        rel="noopener noreferrer"
      >
        Check out Project Sherwood in VRChat!
      </a>
      <iframe
        className="mt-4 md:mt-10 w-full aspect-video"
        src="https://www.youtube.com/embed/qASfnW2UlfA?si=xLcyxMM78X5crUU-"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
