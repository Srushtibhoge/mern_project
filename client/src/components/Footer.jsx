import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
// import {BsFacebook,BsInstagram,BsTwitter} from 'react-icon/bs'
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="">
            <Link to='/' className='self-center whitespace-nowrap text-lg
      sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
        via-purple-500 to-pink-500 rounded-lg text-white'>Srush's</span>
        Blog
      </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 
            sm:gap-6">
               <div>
               <Footer.Title title="About"/>
                <Footer.LinkGroup col>
                    <Footer.Link href="www.google.com" target="_blank" rel="noopener noreferrer"> 
                        100 JS Projets
                    </Footer.Link>
                    <Footer.Link href="/about" target="_blank" rel="noopener noreferrer"> 
                        Srush's Blog
                    </Footer.Link>
                </Footer.LinkGroup>
                </div> 
                <div>
               <Footer.Title title="Follow us"/>
                <Footer.LinkGroup col>
                    <Footer.Link href="" target="_blank" rel="noopener noreferrer"> 
                        Github
                    </Footer.Link>
                    <Footer.Link href="#" > 
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>
                </div> 
                <div>
               <Footer.Title title="legal"/>
                <Footer.LinkGroup col>
                    <Footer.Link href="" > 
                    Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#" > 
                        Terms &amp; Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
            </div>
            <Footer.Divider/>
            <div className="">
              <Footer.Copyright href="#" by="Srush's blog" year={new Date().getFullYear()}/>
            </div>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              {/* <Footer.Icon href="#"  icon={BsFacebook}/>
              <Footer.Icon href="#"  icon={BsInstagram}/>
              <Footer.Icon href="#"  icon={BsTwitter}/> */}
              {/* <Footer.Icon href="#"  icon={BsFacebook}/>
              <Footer.Icon href="#"  icon={BsFacebook}/> */}
            </div>
        </div>
    </Footer>
  )
}
