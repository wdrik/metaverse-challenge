import Image from 'next/image';
import { useMoralis } from 'react-moralis';

import Avatar from './Avatar';

function Header() {
  const { user } = useMoralis();

  return (
    <header>
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image src="https://links.papareact.com/3pi" layout="fill" className="rounded-full" objectFit="cover" />
        </div>

        <div>
          <div>
            <Avatar logoutOnPress />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
