import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface FooterProps {
  store: Store;
  arrCategories: Category[];
}

const Footer = ({ store, arrCategories }: FooterProps) => {
  return (
    <footer className="pt-8">
      <div className="bg-white hidden md:flex md:flex-row justify-center py-4">
        <div className="md:basis-1/4 xl:pl-24 lg:pl-14 pl-6">
          <Image
            src={store.logoImageUrl}
            width={100}
            height={95}
            alt="logo"
            className="pb-4"
          />
          <span>{store.description}</span>
        </div>
        <div className="md:basis-1/4 xl:px-24 lg:pl-14 pl-6">
          <div className="font-bold text-xl pb-4">Categories</div>
          <ul>
            {arrCategories.map((category) => (
              <li key={category.id} className="py-1">
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:basis-1/4 xl:px-24  lg:pl-14 pl-6">
          <div className="font-bold text-xl pb-4">Legal</div>
          <ul>
            <li className="py-1">Terms and Conditions</li>
            <li className="py-1">Complaints Book</li>
            <li className="py-1">FAQ</li>
          </ul>
        </div>
        <div className="md:basis-1/4  xl:pl-24  lg:pl-14 pl-6 pr-7">
          <div className="font-bold text-xl pb-4">Contact</div>
          <ul>
            <li className="py-1">{store.address}</li>
            <li className="py-1">{store.emailSupport}</li>
            <li className="py-1">+{store.phoneSupport}</li>
            <li className="py-1 space-x-4 flex">
              <a href={store.fbLink} target="_blank">
                <Facebook className="h-7 w-7 hover:text-blue-500 hover:cursor-pointer" />
              </a>
              <a href={store.fbLink} target="_blank">
                <Instagram className="h-7 w-7 hover:text-red-500 hover:cursor-pointer" />
              </a>
              <a href={store.xLink} target="_blank">
                <Twitter className="h-7 w-7 hover:text-blue-500 hover:cursor-pointer" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden bg-white ">
        <div className="md:basis-1/4 xl:pl-24 lg:pl-14 pl-11 pr-11 pt-7 pb-3">
          <Image
            src={store.logoImageUrl}
            width={100}
            height={95}
            alt="logo"
            className="pb-4"
          />
          <span>{store.description}</span>
        </div>
      </div>

      <div className="bg-white md:hidden flex flex-row justify-center py-4">
        <div className="basis-1/2 pl-11">
          <div className="font-bold text-xl pb-2">Categories</div>
          <ul>
            {arrCategories.map((category) => (
              <li key={category.id} className="py-1">
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-1/2 pr-11 pl-5">
          <div className="font-bold text-xl pb-2">Legal</div>
          <ul>
            <li className="py-1">Terms and Conditions</li>
            <li className="py-1">Complaints Book</li>
            <li className="py-1">FAQ</li>
          </ul>
        </div>
      </div>
      <div className="bg-white md:hidden flex flex-col justify-center px-11">
        <div className="font-bold text-xl pb-4 ">Contact</div>
        <ul>
          <li className="py-1">{store.address}</li>
          <li className="py-1">{store.emailSupport}</li>
          <li className="py-1">+{store.phoneSupport}</li>
          <li className="py-1 space-x-4 flex">
            <a href={store.fbLink} target="_blank">
              <Facebook className="h-7 w-7 hover:text-blue-500 hover:cursor-pointer" />
            </a>
            <a href={store.fbLink} target="_blank">
              <Instagram className="h-7 w-7 hover:text-red-500 hover:cursor-pointer" />
            </a>
            <a href={store.xLink} target="_blank">
              <Twitter className="h-7 w-7 hover:text-blue-500 hover:cursor-pointer" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
