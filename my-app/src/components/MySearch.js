
import { Link } from "react-router-dom";

const MySearch = () => {
    return ( 
        <div>
            <section class=" hero">
                <h2>Welcome to Our Nyaay Sahaayak Platform</h2>
                <p class="pad">We're here to help you with your legal needs.</p>
                <div id="search" class = " body1">
                    {/* <input type="text" id="search-input" placeholder="Search..." class="search1"></input>
                    <button id="search-button" class=" cta-button pad1">Search</button> */}

                    <div class="search-container">
                    <form action="https://www.google.com/search" method="GET" target="_blank">
                        <div class="search-box">
                            <input type="text" name="q" placeholder="Search..."></input>
                            <button class="button1 cta-button" type="submit">Search</button>
                        </div>
                    </form>
                    </div>

                    <div>
                        <button class="cta-button button1 pad1"><Link to="/chatbot" style={{color:"white"}}>CHATBOT</Link></button>
                    </div>
                </div>
                <ntp-realbox id="realbox" width-behavior_ shown is-dark></ntp-realbox>
                <div id="language-selector" class="search3">
                    <label for="language-dropdown" class="pad1">Select Language:</label>
                    <select id="language-dropdown" class="search4">
                        <option value="en">English</option>
                        <option value="te">Telugu</option>
                        <option value="hi">Hindi</option>
                        <option value="mr">Marathi</option>
                        <option value="ta">Tamil</option>
                        <option value="kn">Kannada</option>
                    </select> 
                </div>
               </section>
        </div>
     );
}
 
export default MySearch;