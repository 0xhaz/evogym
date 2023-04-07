import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            mollitia ad sapiente? Impedit vero maiores ipsam, nam at ullam rem
            soluta officiis, vitae vel sit ut accusamus mollitia voluptatem.
            Fuga!
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Mass orci erectus </p>
          <p className="my-5">Mass orci </p>
          <p>Lorem ipus </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">tempus metus mattis</p>
          <p>+123456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
