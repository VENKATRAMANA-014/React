import { Link } from "react-router-dom";

const Login= () => {
    return ( 
        <>
<div class="bg1">


<div class="container6">
      <form class="form-1">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" required />
        {/* <span>Forgot Password</span> */}
              <div >
                <a href="#!" style={{paddingLeft:"40px"}}>Forgot password?</a>
              </div>

        <button class="button5" style={{paddingLeft:"80px",paddingRight:"80px",}}>Login</button>
        <p>Or SignUp Using</p>
        <div class="icons">
          <a href="https://www.facebook.com/" target="blank"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://twitter.com/" target="blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="https://mail.google.com/" target="blank"
            ><i class="fab fa-google"></i
          ></a>
        </div>
        <div>
		<p>Dont have Account?</p>
    
		<Link to="./signin" style={{marginLeft:"180px"}}>
		<button class="button5" style={{paddingLeft:"80px",paddingRight:"80px"}}>Sign in</button>
		</Link>
    </div>
    
      </form>
    </div>
	</div>
        
        
          {/* <section class="login-wrap">
 
            <div class="form-outline mb-4">
              <input type="email"  class="form-control" />
              <label class="form-label" for="text">Email address</label>
            </div>

			<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" class="input"></input>
				</div>

          
            <div class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">Password</label>
            </div>

          
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
              
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div class="col">
                
                <a href="#!">Forgot password?</a>
              </div>
            </div>


            <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>

            
            <div class="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>
  </section> */}





{/* <body5>
  <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label></input>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label></input>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"></input>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"></input>
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked></input>
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In"></input>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"></input>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"></input>
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass" type="password" class="input" data-type="password"></input>
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" class="input"></input>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign Up"></input>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
</body5> */}



        
        
        
        
        
        </>
     );
}
 
export default Login;