import Image from "next/image"

export default function MyProfilePic() {
  return (
   <section className="w-full mx-auto">
      <Image 
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
    
        src="/images/WhatsApp Image 2024-08-03 at 00.54.04.jpeg"
        width={200}
        height={200}
        alt="Tushar Jaiswal"
        priority={true}
      />
   </section>
  )
}
