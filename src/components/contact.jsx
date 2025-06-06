import Link from "next/link";

export default function Contact() {
  const downloadCV = () => {
    const filePath = "/files/nitish-lahre-cv.docx";
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "nitish-lahre-cv.docx";
    link.click();
  };

  const phoneNumber = "7987898043";
  const message = "Hello! Hope you're doing well...";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div id="contact" className="h-fit w-full px-4 md:px-16 lg:px-40 p-20  pb-16 md:pb-32">
      <h1 className="uppercase text-2xl md:text-3xl font-bold p-4 pl-0 text-purple-600">
        Contact
      </h1>
      <div className="flex flex-col md:flex-row w-full border rounded overflow-hidden">
        <div className="flex-1 font-bold">
          <div className="space-y-4 md:space-y-6 p-6 md:p-10">
            <div className="hover-effect p-3 md:p-5 rounded ">
              <Link href={whatsappURL} target="_blank" rel="noopener noreferrer" className="block">
                <h1 className="text-lg md:text-xl">Phone</h1>
                <h1 className="text-base md:text-lg">+91 798 789 8043</h1>
              </Link>
            </div>
            <div className="hover-effect p-3 md:p-5 rounded">
              <Link href="mailto:nitishlahre31@gmail.com" className="block">
                <h1 className="text-lg md:text-xl">Email</h1>
                <h1 className="text-base md:text-lg">nitishlahre31@gmail.com</h1>
              </Link>
            </div>
            <div className="hover-effect p-3 md:p-5 rounded ">
              <Link href="https://github.com/nitishlahre" target="_blank" rel="noopener noreferrer" className="block">
                <h1 className="text-lg md:text-xl">GitHub</h1>
              </Link>
            </div>
            <div className="hover-effect p-3 md:p-5 rounded">
              <Link href="https://www.linkedin.com/in/nitish-lahre/" target="_blank" rel="noopener noreferrer" className="block">
                <h1 className="text-lg md:text-xl">LinkedIn</h1>
              </Link>
            </div>
            <div className="hover-effect p-3 md:p-5 rounded ">
              <button
                onClick={downloadCV}
                className="w-full text-left"
                aria-label="Download CV"
              >
                <h1 className="text-lg md:text-xl cursor-pointer">My CV</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
