import Image from 'next/image';
import React from 'react';
import { FcWorkflow } from 'react-icons/fc';
import SectionHeading from './SectionHeading';

type Props = {};

const Curriculum = (props: Props) => {
  return (
    <section className="mt-20 mb-20 bg-slate-50">
      <div className="pt-16">
        <SectionHeading title="What you are going to learn" />
      </div>
      <div className="flex justify-center w-full mt-10">
        <div className="relative h-[500px] w-[1200px] drop-shadow-lg rounded-xl">
          <Image
            src={'/imgs/aas.png'}
            fill
            alt="Oye Trader Curriculum"
            className="hidden object-contain object-center rounded-xl md:block"
          />
          <Image
            src={'/imgs/mobile.png'}
            fill
            alt="Oye Trader Curriculum"
            className="object-contain object-center md:hidden rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
