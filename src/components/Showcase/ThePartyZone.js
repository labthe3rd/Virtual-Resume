export default function ThePartyZone() {
  return (
    <div className="ml-8 w-11/12 sm:ml-0 sm:w-1/3 box-border border-large border-neutral-600 border-dotted p-4 bg-neutral-700 bg-opacity-30">
      <h1 className="font-bold text-xl sm:text-3xl">The Party Zone</h1>
      <p className="mt-10 sm:mt-4">
        My first VRChat music venue I created as a passion project. I programmed
        most of the game assets in this world as a means to get a strong
        understanding of everything Unity and VRChat. This led me down a path of
        hosting concerts in VR for nearly 3 years now that both PCVR and Android
        users can enjoy.
      </p>
      <a
        className="text-2xl text-primary"
        target="_blank"
        href="https://vrchat.com/home/world/wrld_12b67aa4-316b-4172-8b34-c75e36dc4fa6"
        rel="noopener noreferrer"
      >
        Check out The Party Zone in VRChat!
      </a>
      <iframe
        className="mt-4 md:mt-10 w-full aspect-video"
        src="https://www.youtube.com/embed/egsxuxKUyhg?si=6nvy8CVFRdV9lKt7"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
