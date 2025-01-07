import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-[100px] px-5 md:px-10 py-10">
      <div className="max-w-[1440px] mx-auto flex flex-wrap gap-8 justify-between">
        {/* Exclusive Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <h2 className="text-2xl font-bold">Exclusive</h2>
          <p className="text-sm">Get 10% off your first order</p>
          <div className="relative border rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-black text-white placeholder-gray-500 outline-none"
            />
          </div>
        </div>

        {/* Support Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/5">
          <h3 className="text-lg font-medium">Support</h3>
          <p className="text-sm">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="text-sm">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/5">
          <h3 className="text-lg font-medium">Account</h3>
          <ul className="space-y-2">
            <li className="text-sm">My Account</li>
            <li className="text-sm">Login / Register</li>
            <li className="text-sm">Cart</li>
            <li className="text-sm">Wishlist</li>
            <li className="text-sm">Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/5">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="space-y-2">
            <li className="text-sm">Privacy Policy</li>
            <li className="text-sm">Terms of Use</li>
            <li className="text-sm">FAQ</li>
            <li className="text-sm">Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/4">
          <h3 className="text-lg font-medium">Download App</h3>
          <p className="text-sm">Save $3 with App New User Only</p>
          <div className="flex items-center gap-4">
            <Image
              src="/Qr.png"
              alt="QR Code"
              width={80}
              height={80}
              className="w-20 h-20"
            />
            <div className="flex flex-col gap-2">
              <Image
                src="/GoogleP.png"
                alt="Google Play"
                width={110}
                height={40}
                className="w-28 h-10"
              />
              <Image
                src="/AppStore.png"
                alt="App Store"
                width={104}
                height={34}
                className="w-28 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
