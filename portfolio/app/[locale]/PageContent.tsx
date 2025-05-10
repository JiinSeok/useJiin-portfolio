'use client'

import Image from "next/image";
import {LocalizedText} from "../components/LocalizedText";

export default function PageContent() {

  return (

    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        <LocalizedText id={'title'} />
      </h1>

      <Image
        src="/profile.jpg"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale"
        unoptimized
        draggable={false}
        width={160}
        height={160}
        priority
      />

      <div className="dark:prose-invert">
        <p>
          <LocalizedText id={'introduction'} />
        </p>
      </div>
    </section>

  )
    ;
}