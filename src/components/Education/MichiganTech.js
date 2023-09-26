import Image from "next/image";

export default function MichiganTech() {
  return (
    <div className="ml-8 w-11/12 sm:ml-0 sm:w-1/3 box-border border-large border-neutral-600 border-dotted p-4 bg-neutral-100 bg-opacity-30 ">
      <div className="flex justify-center">
        <Image
          src="/MichiganTechLogo.png"
          alt="Michigan Technological University"
          width={500}
          height={500}
        />
      </div>
      {/* <h1 className="font-bold text-xl sm:text-3xl">
        Michigan Technological University
      </h1> */}

      <h2 className="font-semibold text-xl">
        Bachelors Of Science In Electrical Engineering
      </h2>
      <h3 className="italic">September 2012 - May 2015</h3>
      <h4 className="mt-16 text-2xl">Awards Earned</h4>
      <h5 className="mt-2 text-2xl sm:text-3xl italic">Larry Kennedy Award</h5>
      <p className="mt-2">
        Award achieved through managing the senior design team in the EE
        department. Our project was the "Smart Bin" which was a system that
        would measure the wait of a large product reject bin and transmit the
        data to a PLC wirelessly. The project was created to detect areas of the
        assembly process that had the most issues and allow the engineering team
        to improve the product line.
      </p>
      <h6 className="mt-16 text-2xl">Skills learned through coursework</h6>
      <ul className="list-disc list-inside text-left pl-4">
        <li>Circuit Analysis</li>
        <li>Signal Analysis</li>
        <li>Verilog HDL programming for FPGA boards</li>
        <li>Micro Processor programming using Assembly and C</li>
        <li>Matlab and Simulink</li>
        <li>Thermodynamics</li>
      </ul>
    </div>
  );
}
