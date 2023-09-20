import Link from "next/link";
import { HiMail } from "react-icons/hi";
import { FaLinkedin, FaDiscord } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="grid justify-items-center mt-8 text-xl">
      <h1 className="text-4xl">Contact</h1>
      <table className="table-fixed mt-8 border-spacing-8">
        <tbody>
          <tr>
            <td>
              <HiMail />
            </td>
            <td>
              <Link
                href="mailto:labthe3rd@gmail.com"
                className="text-primary-500"
              >
                E-Mail
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <FaLinkedin />
            </td>
            <td>
              <Link href="https://www.linkedin.com/in/louis-bersine-iii/">
                LinkedIn
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <FaDiscord />
            </td>
            <td>
              <Link href="https://discord.gg/y5T5sG7mPr">The Party Zone</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
