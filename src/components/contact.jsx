import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

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
    <div id="contact" className="h-fit w-full px-4 md:px-16 lg:px-40 p-20">
      <h1 className="uppercase text-xl md:text-xl font-bold p-4 pl-0 text-purple-600">
        Contact
      </h1>
      <div className="flex flex-col md:flex-row w-full border rounded overflow-hidden">
        <div className="flex-1 font-bold text-s md:text-s">
          <div className="space-y-4 md:space-y-6 p-6 md:p-2">
            <div className="hover-effect p-3 md:p-5 rounded border ">
              <Link
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="hover-effect rounded flex items-center justify-between">
                  <div>
                    <h1 className=" ">Phone</h1>
                    <h1 className="text-base ">+91 798 789 8043</h1>
                  </div>
                  <SquareArrowOutUpRight className="ml-4" />
                </div>
              </Link>
            </div>
            <div className="hover-effect p-3 md:p-5 rounded">
              <Link href="mailto:nitishlahre31@gmail.com" className="block">
                <div className="hover-effect rounded flex items-center justify-between">
                  <div>
                    <h1 className=" ">Email</h1>
                    <h1 className="text-base ">nitishlahre31@gmail.com</h1>
                  </div>
                  <SquareArrowOutUpRight className="ml-4" />
                </div>
              </Link>
            </div>
            <div className="hover-effect p-3 md:p-5 rounded border ">
              <Link
                href="https://github.com/nitishlahre"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="hover-effect rounded flex items-center justify-between">
                  <div>
                    <h1 className=" ">GitHub</h1>
                  </div>
                  <SquareArrowOutUpRight className="ml-4" />
                </div>
              </Link>
            </div>
            <div className="hover-effect p-3 md:p-5 rounded">
              <Link
                href="https://www.linkedin.com/in/nitish-lahre/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="hover-effect rounded flex items-center justify-between">
                  <div>
                    <h1 className=" ">LinkedIn</h1>
                  </div>
                  <SquareArrowOutUpRight className="ml-4" />
                </div>
              </Link>
            </div>
            <div className="hover-effect p-3 md:p-5 rounded border ">
              <button
                onClick={downloadCV}
                className="w-full text-left"
                aria-label="Download CV"
              >
                <div className="hover-effect rounded flex items-center justify-between">
                  <div>
                    <h1 className="  cursor-pointer">My CV</h1>
                  </div>
                  <SquareArrowOutUpRight className="ml-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
