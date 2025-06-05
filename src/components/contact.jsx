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
    <div id="contact" className="h-fit w-full connect px-40 pt-56 pb-32">
      <h1 className="uppercase text-2xl font-bold p-5 pl-0 text-purple-600">
        Contact
      </h1>
      <div className="flex w-full h-fit border rounded">
        <div className="child flex-1 font-bold">
          <div className="social-handle space-y-5 p-10">
            <div className="hover-effect p-2 px-5 rounded border">
              <Link href={whatsappURL}>
                <h1>Phone</h1>
                <h1>+91 798 789 8043</h1>
              </Link>
            </div>
            <div className="hover-effect p-2 px-5 rounded">
              <Link href="mailto:nitishlahre31@gmail.com">
                <h1>Email</h1>
                <h1>nitishlahre31@gmail.com</h1>
              </Link>
            </div>
            <div className="hover-effect p-2 px-5 rounded border">
              <Link href="https://github.com/nitishlahre">
                <h1>GitHub</h1>
              </Link>
            </div>
            <div className="hover-effect p-2 px-5 rounded">
              <Link href="https://www.linkedin.com/in/nitish-lahre/">
                <h1>LinkedIn</h1>
              </Link>
            </div>
            <div className="hover-effect p-2 px-5 rounded border">
              <button onClick={downloadCV}>
                <h1>My CV</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
