import './Main.css'
import Hero from "../Hero/Hero";
import AboutProject from "../AboutProject/AboutProject";
import Stacks from "../Stacks/Stacks";
import Student from "../Student/Student";
import Portfolio from "../../Portfolio/Portfolio";


export default function Main() {

  return (
    <main className={'main'}>
      <Hero />
      <AboutProject />
      <Stacks />
      <Student />
      <Portfolio />
    </main>
  )
}
