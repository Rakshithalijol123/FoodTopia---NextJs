import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello, FoodTopia 
          You're developing using NextJS Framework.
      <div className="home">
        <Link className="border-2 rounded-lg text-2xl text-red-500" href="/home" >Go To Home</Link>
      </div>
    </div>
  )
}
