"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import ImageButton from './ImageButton';
import React from 'react';
import profile from '@/public/assets/images/profile.png';

const Nav = () => {
  const link = "/";
  const imagURL = "/assets/images/logo.svg";

  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleClickProfile = () => {
    setToggleDropDown(prev => !prev);
  };

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    fetchProviders();
  }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href={link}>
        <Image
          src={imagURL}
          alt='promptshare app logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>PromptShare</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href={"/create-prompt"} className='black_btn'>
              Create Post
            </Link>
            <button
              type='button'
              onClick={signOut}
              className='outline_btn cursor-pointer'
            >
              Sign Out
            </button>

            <Link href={"/profile"}>
              <Image
                src={session?.user.image}
                className='rounded-full'
                alt='profile'
                width={37}
                height={37}
                onClick={() => {}}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign in with {provider.name}
              </button>
            ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className="flex">
            <ImageButton
              src={session?.user.image}
              alt='profile utilisateur'
              onClick={handleClickProfile}
            />
            {toggleDropDown && (
              <div className="dropdown cursor-pointer">
                <Link
                  href="/profile"
                  className='dropdown_link'
                  onClick={() => setToggleDropDown(false)}
                >
                  <span className='font-bold'>My Profile</span>
                </Link>

                <Link
                  href={"/create-prompt"}
                  className='dropdown_link'
                  onClick={() => setToggleDropDown(false)}
                >
                  <span className='font-bold'>Create Prompt</span>
                </Link>

                <button
                  type='button'
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className='black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign in with {provider.name}
              </button>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
