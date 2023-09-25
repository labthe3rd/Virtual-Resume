export default function Delirium() {
  return (
    <div className="ml-8 w-11/12 sm:ml-0 sm:w-1/3 box-border border-large border-neutral-600 border-dotted p-4 bg-neutral-700 bg-opacity-30">
      <h1 className="font-bold text-xl sm:text-3xl">Delirium</h1>
      <h2 className="font-semibold text-xl">Lead Developer</h2>
      <h3 className="italic">February 2023 - March 2023</h3>
      <p className="mt-10 sm:mt-4">
        My client wanted a virtual music venue for their club in VRChat. They
        requested a club with sound reactive lights, mini games, club branding,
        in-game authentication system, and video player controls for
        performances.
      </p>
      <a
        className="text-2xl text-primary"
        target="_blank"
        href="https://vrchat.com/home/world/wrld_47feb70f-3b08-47bf-868c-7354479cc831"
        rel="noopener noreferrer"
      >
        Check out Delirium in VRChat!
      </a>
      <iframe
        className="mt-4 md:mt-10 w-full aspect-video"
        src="https://www.youtube.com/embed/EzIdEcaJgFQ?si=tPZjv7TePtvCpffZ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
