import React from "react";

const footerInfo = [
  {
    name: "about",
  },
  {
    name: "Help Center",
  },
  {
    name: "Terms of Service",
  },
  {
    name: "Privacy Policy",
  },
  {
    name: "Cookie Policy",
  },
  {
    name: "Blog",
  },
  {
    name: "Status",
  },
  {
    name: "Careers",
  },
  {
    name: "Blog",
  },
  {
    name: "Status",
  },
  {
    name: "Brand Resources",
  },
  {
    name: "Advertising",
  },
  {
    name: "Marketing",
  },
  {
    name: "Twitter for Business",
  },
  {
    name: "Developers",
  },
  {
    name: "Directory Settings",
  },
];

const Footer = () => {
  return (
    <footer className="text-center mt-4">
      <div className="">
        {footerInfo.map((data) => {
          return <b className="mr-3">{data.name}</b>;
        })}
        <br />
        <b>© 2020 Twitter, Inc.</b>
      </div>
    </footer>
  );
};

export default Footer;
